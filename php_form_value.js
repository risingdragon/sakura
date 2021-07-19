Editor.ReplaceAll(
    "(?s:(?s:<input.+name=\"([^\"]+)\"[^>]+)value=\"[^\"]*\"([^>]*>))",
    "\\1value=\"<?php echo htmlspecialchars($forms['\\2']); ?>\"\\3",
    132
);
Editor.FileSave();
