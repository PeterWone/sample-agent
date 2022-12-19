import { env } from 'process';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(vscode.commands.registerCommand("sample-agent.showInvokerHost", msg =>
		vscode.window.showInformationMessage(`sample-agent.showInvokerHost was invoked from ${msg ?? "local"}`)
	));

}

vscode.commands.executeCommand("sample-agent.showInvokerHost", `${vscode.env.remoteName ?? "local"} (self-invoke startup message for agent)`)
