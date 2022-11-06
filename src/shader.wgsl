// vertex shader

struct Uniforms {   
    view_project_mat : mat4x4<f32>,
    model_mat : mat4x4<f32>   
};
@binding(0) @group(0) var<uniform> uniforms : Uniforms;

struct Output {
    @builtin(position) position : vec4<f32>,
    @location(0) v_position : vec4<f32>,
    @location(1) v_normal : vec4<f32>,
};

struct FragUniforms {
    light_position : vec4<f32>,
    eye_position : vec4<f32>,
};
@binding(1) @group(0) var<uniform> frag_uniforms : FragUniforms;

struct LightUniforms {
    color : vec4<f32>,  
    specular_color : vec4<f32>,
    params: vec4<f32>, // ambient_intensity, diffuse_intensity, specular_intensity, specular_shininess
};
@binding(2) @group(0) var<uniform> light_uniforms : LightUniforms;
@binding(3) @group(0) var mySampler : sampler;
@binding(4) @group(0) var texture : texture_2d<f32>;

@vertex
fn vs_main(@location(0) pos: vec4<f32>, @location(1) uv: vec2<f32>) -> Output {    
    var output: Output;
    //Vec3(2*(R-L), 2*(B-T), -4)
    const epsilon = 0.01;
    const heightModifier = 1000.0;
    let r = textureSampleLevel(texture, mySampler, uv + vec2(epsilon, 0.0), 0.0) * heightModifier;
    let l = textureSampleLevel(texture, mySampler, uv + vec2(-epsilon, 0.0), 0.0) * heightModifier;
    let t = textureSampleLevel(texture, mySampler, uv + vec2(0.0, -epsilon), 0.0) * heightModifier;
    let b = textureSampleLevel(texture, mySampler, uv + vec2(0.0, epsilon), 0.0) * heightModifier;
    let texColor = textureSampleLevel(texture, mySampler, uv, 0.0);
    let m_position:vec4<f32> = uniforms.model_mat * vec4(pos.x, texColor.r * heightModifier, pos.z, 1.0); 
    output.v_position = m_position;
    output.v_normal =  normalize(vec4(2*(r.r - l.r), 2*(b.r - t.r), -4, 1.0));
    output.position = uniforms.view_project_mat * m_position;               
    return output;
}

// fragment shader 

@fragment
fn fs_main(@location(0) v_position: vec4<f32>, @location(1) v_normal: vec4<f32>) ->  @location(0) vec4<f32> {
    let N:vec3<f32> = normalize(v_normal.xyz);                
    let L:vec3<f32> = normalize(frag_uniforms.light_position.xyz - v_position.xyz);     
    let V:vec3<f32> = normalize(frag_uniforms.eye_position.xyz - v_position.xyz);          
    let H:vec3<f32> = normalize(L + V);
    let diffuse:f32 = light_uniforms.params[1] * max(dot(N, L), 0.0);
    let specular: f32 = light_uniforms.params[2] * pow(max(dot(N, H),0.0), light_uniforms.params[3]);
    let ambient:f32 = light_uniforms.params[0];               
    let final_color = light_uniforms.color*(ambient + diffuse) + light_uniforms.specular_color * specular; 
    return vec4<f32>(final_color.rgb, 1.0);
}