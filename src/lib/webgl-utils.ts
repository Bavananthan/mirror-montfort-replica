// Check if WebGL is supported
export const isWebGLSupported = (): boolean => {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    return !!(gl && gl instanceof WebGLRenderingContext);
  } catch (e) {
    return false;
  }
};

// Check if WebGL2 is supported
export const isWebGL2Supported = (): boolean => {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2');
    return !!(gl && gl instanceof WebGL2RenderingContext);
  } catch (e) {
    return false;
  }
};