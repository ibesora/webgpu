import { vec3, mat4 } from "gl-matrix";

export const CheckWebGPU = () => {
  let result = "Great, your current browser supports WebGPU!";
  if (!navigator.gpu) {
    result = `Your current browser does not support WebGPU! Make sure you are on a system 
                  with WebGPU enabled. Currently, WebGPU is supported in  
                  <a href="https://www.google.com/chrome/canary/">Chrome canary</a>
                  with the flag "enable-unsafe-webgpu" enabled. See the 
                  <a href="https://github.com/gpuweb/gpuweb/wiki/Implementation-Status"> 
                  Implementation Status</a> page for more details.   
                  You can also use your regular Chrome to try a pre-release version of WebGPU via
                  <a href="https://developer.chrome.com/origintrials/#/view_trial/118219490218475521">Origin Trial</a>.                
              `;
  }

  const canvas = document.getElementById("canvas-webgpu") as HTMLCanvasElement;
  if (canvas) {
    const div = document.getElementsByClassName("item2")[0] as HTMLDivElement;
    canvas.width = div.offsetWidth;
    canvas.height = div.offsetHeight;

    function windowResize() {
      canvas.width = div.offsetWidth;
      canvas.height = div.offsetHeight;
    }
    window.addEventListener("resize", windowResize);
  }
  return result;
};

export const CreateGPUBuffer = (
  device: GPUDevice,
  data: Float32Array,
  usageFlag: GPUBufferUsageFlags = GPUBufferUsage.VERTEX |
    GPUBufferUsage.COPY_DST
) => {
  const buffer = device.createBuffer({
    size: data.byteLength,
    usage: usageFlag,
    mappedAtCreation: true,
  });
  new Float32Array(buffer.getMappedRange()).set(data);
  buffer.unmap();
  return buffer;
};

export const InitGPU = async () => {
  const checkgpu = CheckWebGPU();
  if (checkgpu.includes("Your current browser does not support WebGPU!")) {
    console.log(checkgpu);
    throw "Your current browser does not support WebGPU!";
  }
  const canvas = document.getElementById("canvas-webgpu") as HTMLCanvasElement;
  const adapter = await navigator.gpu?.requestAdapter();
  const device = (await adapter?.requestDevice()) as GPUDevice;
  const context = canvas.getContext("webgpu") as unknown as GPUCanvasContext;
  const format = navigator.gpu.getPreferredCanvasFormat();

  context.configure({
    device: device,
    format: format,
    alphaMode: "opaque",
  });
  return { device, canvas, format, context };
};

export const CreateTransforms = (
  modelMat: mat4,
  translation: vec3 = [0, 0, 0],
  rotation: vec3 = [0, 0, 0],
  scaling: vec3 = [1, 1, 1]
) => {
  const rotateXMat = mat4.create();
  const rotateYMat = mat4.create();
  const rotateZMat = mat4.create();
  const translateMat = mat4.create();
  const scaleMat = mat4.create();

  //perform individual transformations
  mat4.fromTranslation(translateMat, translation);
  mat4.fromXRotation(rotateXMat, rotation[0]);
  mat4.fromYRotation(rotateYMat, rotation[1]);
  mat4.fromZRotation(rotateZMat, rotation[2]);
  mat4.fromScaling(scaleMat, scaling);

  //combine all transformation matrices together to form a final transform matrix: modelMat
  mat4.multiply(modelMat, rotateXMat, scaleMat);
  mat4.multiply(modelMat, rotateYMat, modelMat);
  mat4.multiply(modelMat, rotateZMat, modelMat);
  mat4.multiply(modelMat, translateMat, modelMat);
};

export const CreateViewProjection = (
  aspectRatio = 1.0,
  cameraPosition: vec3 = [0, 1500, -500],
  lookDirection: vec3 = [0, 0, 0],
  upDirection: vec3 = [0, 1, 0]
) => {
  const viewMatrix = mat4.create();
  const projectionMatrix = mat4.create();
  const viewProjectionMatrix = mat4.create();
  mat4.perspective(
    projectionMatrix,
    (2 * Math.PI) / 5,
    aspectRatio,
    0.1,
    Infinity
  );

  mat4.lookAt(viewMatrix, cameraPosition, lookDirection, upDirection);
  mat4.multiply(viewProjectionMatrix, projectionMatrix, viewMatrix);

  const cameraOption = {
    eye: cameraPosition,
    center: lookDirection,
    zoomMax: 100,
    zoomSpeed: 2,
  };

  return {
    viewMatrix,
    projectionMatrix,
    viewProjectionMatrix,
    cameraOption,
  };
};

export const CreateGPUBufferUint = (
  device: GPUDevice,
  data: Uint32Array,
  usageFlag: GPUBufferUsageFlags = GPUBufferUsage.INDEX |
    GPUBufferUsage.COPY_DST
) => {
  const buffer = device.createBuffer({
    size: data.byteLength,
    usage: usageFlag,
    mappedAtCreation: true,
  });
  new Uint32Array(buffer.getMappedRange()).set(data);
  buffer.unmap();
  return buffer;
};

export const CreateAnimation = (
  draw: any,
  rotation: vec3 = vec3.fromValues(0, 0, 0),
  isAnimation = true
) => {
  function step() {
    if (isAnimation) {
      rotation[0] += 0.0;
      rotation[1] += 0.01;
      rotation[2] += 0.0;
    } else {
      rotation = [0, 0, 0];
    }
    draw();
    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
};

export async function webGPUTextureFromImageElement(
  gpuDevice: GPUDevice,
  imgElement: HTMLImageElement
) {
  if (imgElement.complete) {
    const imgBitmap = await createImageBitmap(imgElement);
    return await webGPUTextureFromImageBitmapOrCanvas(gpuDevice, imgBitmap);
  } else {
    // If the image isn't loaded yet we'll wrap the load/error events in a promise to keep the
    // function interface consistent.
    return new Promise((_, reject) => {
      imgElement.addEventListener("load", async () => {
        const imgBitmap = await createImageBitmap(imgElement);
        return await webGPUTextureFromImageBitmapOrCanvas(gpuDevice, imgBitmap);
      });
      imgElement.addEventListener("error", reject);
    });
  }
}

function webGPUTextureFromImageBitmapOrCanvas(
  gpuDevice: GPUDevice,
  source: ImageBitmap
) {
  const textureDescriptor = {
    // Unlike in WebGL, the size of our texture must be set at texture creation time.
    // This means we have to wait until the image is loaded to create the texture, since we won't
    // know the size until then.
    size: { width: source.width, height: source.height },
    format: "rgba8unorm" as GPUTextureFormat,
    usage:
      GPUTextureUsage.TEXTURE_BINDING |
      GPUTextureUsage.COPY_DST |
      GPUTextureUsage.RENDER_ATTACHMENT,
  };
  const texture = gpuDevice.createTexture(textureDescriptor);

  gpuDevice.queue.copyExternalImageToTexture(
    { source },
    { texture },
    textureDescriptor.size
  );

  return texture;
}
