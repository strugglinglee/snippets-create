import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "snippets-create.createSnippets",
      async () => {
        vscode.window.showInformationMessage('createSnippets');
      }
    )
  );
}

export function deactivate() {}
