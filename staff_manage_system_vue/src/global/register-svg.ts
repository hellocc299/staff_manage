import {App} from 'vue'
import "element-plus/dist/index.css"


import {
  Avatar,
  Expand,
  Fold,
  RefreshLeft,
  Search,
  Edit,
  DeleteFilled,
  RefreshRight,
  List
} from "@element-plus/icons"

const components = [
  Avatar,
  Expand,
  Fold,
  RefreshLeft,
  Search,
  Edit,
  DeleteFilled,
  RefreshRight,
  List
]

export default function(app: App): void {
  for(const svg of components) {
    app.component(svg.name, svg)
  }
}
