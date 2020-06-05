Blockly.Blocks['command'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Komenda");
    this.appendDummyInput()
        .appendField("Nazwa komendy")
        .appendField(new Blockly.FieldTextInput("command"), "command");
    this.appendDummyInput()
        .appendField("Opis komeny")
        .appendField(new Blockly.FieldTextInput("description"), "description");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setColour(225);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['command'] = function(block) {
  var text_command = block.getFieldValue('command');
  var text_description = block.getFieldValue('description');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = `
command /${text_command}:
  description: ${text_description}
  trigger:${statements_name}`;
  return code;
};