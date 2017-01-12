Editor.ReplaceAll("^", "=\"", 132);
Editor.ReplaceAll("$", "\"", 132);
Editor.ReplaceAll(",", "\",=\"", 132);
Editor.FileSaveAs(Editor.GetFileName(), 0, 0);
