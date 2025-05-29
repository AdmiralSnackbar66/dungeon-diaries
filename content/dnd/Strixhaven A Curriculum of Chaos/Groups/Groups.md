---

database-plugin: basic

---

```yaml:dbfolder
name: new database
description: new description
columns:
  __file__:
    key: __file__
    id: __file__
    input: markdown
    label: File
    accessorKey: __file__
    isMetadata: true
    skipPersist: false
    isDragDisabled: false
    csvCandidate: true
    position: 0
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: true
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  publish:
    input: checkbox
    accessorKey: publish
    key: publish
    id: publish
    label: publish
    position: 100
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  published:
    input: calendar
    accessorKey: published
    key: published
    id: published
    label: published
    position: 100
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  explorerexclude:
    input: checkbox
    accessorKey: explorerexclude
    key: explorerexclude
    id: explorerexclude
    label: explorerexclude
    position: 100
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  tags:
    input: tags
    accessorKey: tags
    key: tags
    id: tags
    label: tags
    position: 100
    skipPersist: false
    isHidden: false
    sortIndex: -1
    options:
      - { label: "dnd", value: "dnd", color: "hsl(38, 95%, 90%)"}
      - { label: "groups", value: "groups", color: "hsl(124, 95%, 90%)"}
      - { label: "lorehold", value: "lorehold", color: "hsl(130, 95%, 90%)"}
      - { label: "quandrix", value: "quandrix", color: "hsl(4, 95%, 90%)"}
      - { label: "silverquill", value: "silverquill", color: "hsl(356, 95%, 90%)"}
      - { label: "explorerexclude", value: "explorerexclude", color: "hsl(155, 95%, 90%)"}
      - { label: "witherbloom", value: "witherbloom", color: "hsl(72, 95%, 90%)"}
      - { label: "Prismari", value: "Prismari", color: "hsl(83, 95%, 90%)"}
      - { label: "Silverquill", value: "Silverquill", color: "hsl(56, 95%, 90%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
config:
  remove_field_when_delete_column: false
  cell_size: normal
  sticky_first_column: false
  group_folder_column: 
  remove_empty_folders: false
  automatically_group_files: false
  hoist_files_with_empty_attributes: true
  show_metadata_created: false
  show_metadata_modified: false
  show_metadata_tasks: false
  show_metadata_inlinks: false
  show_metadata_outlinks: false
  show_metadata_tags: false
  source_data: current_folder
  source_form_result: 
  source_destination_path: /
  row_templates_folder: /
  current_row_template: 
  pagination_size: 10
  font_size: 16
  enable_js_formulas: false
  formula_folder_path: /
  inline_default: false
  inline_new_position: last_field
  date_format: yyyy-MM-dd
  datetime_format: "yyyy-MM-dd HH:mm:ss"
  metadata_date_format: "yyyy-MM-dd HH:mm:ss"
  enable_footer: false
  implementation: default
filters:
  enabled: false
  conditions:
```