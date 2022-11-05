import "./bootstrap";
import "../css/app.scss";
import "bootstrap";
import { createApp, h } from '/node_modules/vue/dist/vue.esm-bundler.js';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';

import ECharts from 'vue-echarts'
import { use } from "echarts/core"

// import ECharts modules manually to reduce bundle size
import {
    CanvasRenderer
} from 'echarts/renderers'
import {
    BarChart,
    LineChart,
    PieChart,
    MapChart,
    RadarChart,
    ScatterChart,
    EffectScatterChart,
    LinesChart
} from 'echarts/charts'
import {
    GridComponent,
    PolarComponent,
    GeoComponent,
    TooltipComponent,
    LegendComponent,
    TitleComponent,
    VisualMapComponent,
    DatasetComponent,
    ToolboxComponent,
    DataZoomComponent
} from 'echarts/components'

use([
    BarChart,
    LineChart,
    PieChart,
    MapChart,
    RadarChart,
    ScatterChart,
    EffectScatterChart,
    LinesChart,
    GridComponent,
    PolarComponent,
    GeoComponent,
    TooltipComponent,
    LegendComponent,
    TitleComponent,
    VisualMapComponent,
    DatasetComponent,
    CanvasRenderer,
    ToolboxComponent,
    DataZoomComponent
])
// import AppLayout from '@/Layouts/App'
import Vue3EasyDataTable from 'vue3-easy-data-table';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        const page = resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue")
        );

        page.then((module) => {
            module.default.layout = module.default.layout || AppLayout;
        });

        return page;
    },
    setup({ el, app, props, plugin }) {
        const vueApp = createApp({ render: () => h(app, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .component('v-chart', ECharts)
            .component('EasyDataTable', Vue3EasyDataTable)
            .mount(el)
        return vueApp;
    },
});

InertiaProgress.init({ color: '#4B5563' });
