import HelloWorld from '@/components/HelloWorld.vue';
import icons2 from '@/components/symbol/Icons.vue';
import icons1 from '@/components/symbol/Iconsjs.vue';
import unicode from '@/components/unicode/unicode.vue';
import masonry from "@/components/masonry/index.vue";
import flexbox from "@/components/masonry/flexbox.vue";
import waterFallDemo from "@/components/masonry/waterFallDemo.vue";
import waterDemo from "@/components/masonry/waterDemo.vue";
import highlight from "@/components/highlight/index.vue";
import vue2AceEditor from "@/components/vue2AceEditor/index";
import monacoEditor from "@/components/monacoEditor/index";
import grid from "@/components/grid/index";
import postcssPtoViewport from "@/components/postcssPtoViewport/index"
const routers = [{
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/symbol2',
    name: 'icons2',
    component: icons2
  },
  {
    path: '/symbol1',
    name: 'icons1',
    component: icons1
  }, {
    path: '/unicode',
    name: "unicode",
    component: unicode
  },
  {
    path: "/masonry",
    name: "masonry",
    component: masonry
  },
  {
    path: "/flexbox",
    name: "flexbox",
    component: flexbox
  },
  {
    path: "/waterFallDemo",
    name: "waterFallDemo",
    component: waterFallDemo
  },
  {
    path: "/waterDemo",
    name: "waterDemo",
    component: waterDemo
  },
  {
    path: "/highlight",
    name: "highlight",
    component: highlight
  },
  {
    path: "/vue2AceEditor",
    name: "vue2AceEditor",
    component: vue2AceEditor
  },
  {
    path: "/monacoEditor",
    name: "monacoEditor",
    component: monacoEditor
  },
  {
    path: "/grid",
    name: "grid",
    component: grid
  },
  {
    path: "/postcssPtoViewport",
    name: "postcssPtoViewport",
    component: postcssPtoViewport
  }
]
export default routers