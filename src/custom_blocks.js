Blockly.Blocks['message'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Say Hello world");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("xdxd");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['message'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};