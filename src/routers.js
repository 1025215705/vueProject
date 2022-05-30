import HelloWorld from '@/components/HelloWorld.vue';
import icons2 from '@/components/symbol/Icons.vue';
import icons1 from '@/components/symbol/Iconsjs.vue';
import unicode from '@/components/unicode/unicode.vue';
import masonry from "@/components/masonry/index.vue";
import flexbox from "@/components/masonry/flexbox.vue";
import waterFallDemo from "@/components/masonry/waterFallDemo.vue";
import waterDemo from "@/components/masonry/waterDemo.vue"
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
}
]
export default routers