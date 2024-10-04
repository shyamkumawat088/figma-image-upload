// code.ts
figma.showUI(__html__, { width: 300, height: 200 });
figma.ui.onmessage = async (msg) => {
  if (msg.type === "export-image") {
    const selectedNode = figma.currentPage.selection[0];
    if (!selectedNode) {
      figma.ui.postMessage({
        type: "error",
        message: "No node selected. Please select an image or frame."
      });
      return;
    }
    if (!["RECTANGLE", "FRAME", "COMPONENT", "STAR", "ELLIPSE"].includes(
      selectedNode.type
    )) {
      figma.ui.postMessage({
        type: "error",
        message: "Selected node is not an image or frame."
      });
      return;
    }
    try {
      const pngData = await selectedNode.exportAsync({
        format: "PNG",
        constraint: { type: "SCALE", value: 1 }
        // Change scale as needed
      });
      const base64Png = figma.base64Encode(pngData);
      const svgData = await selectedNode.exportAsync({ format: "SVG" });
      figma.ui.postMessage({
        type: "upload-success",
        selectedNode,
        pngData: base64Png,
        svgData
      });
    } catch (error) {
      figma.ui.postMessage({ type: "error", message: error.message });
    }
  }
};
