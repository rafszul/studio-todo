montageDefine("aa2d6f7","ui/task-cell.reel/task-cell.html",{text:'<!DOCTYPE html><html><head>\n    <title></title>\n    <link rel=stylesheet type=text/css href=task-cell.css>\n    <script type=text/montage-serialization>{"owner":{"properties":{"element":{"#":"owner"}},"bindings":{"classList.has(\'TaskCell--completed\')":{"<-":"task.completed"}}},"checkbox":{"prototype":"digit/ui/checkbox.reel","properties":{"element":{"#":"checkbox"},"checked":true},"bindings":{"checked":{"<->":"@owner.task.completed"}}},"textField":{"prototype":"digit/ui/text-field.reel","properties":{"element":{"#":"textField"},"placeholderValue":"Text"},"bindings":{"value":{"<->":"@owner.task.title"}}}}</script>\n</head>\n<body>\n    <div data-montage-id=owner class=TaskCell>\n        <input type=checkbox data-montage-id=checkbox>\n        <input data-montage-id=textField>\n    </div>\n\n</body></html>'});