<template>
    <div class="row">
        <div class="col-7">
            <div class="card p-2">
                <figure style="height: 240px;">
                    <v-chart :option="bar" ref="bar" autoresize />
                </figure>
            </div>
        </div>
        <div class="col-5">
            <div class="card p-2">
                <figure style="height: 240px;">
                    <v-chart :option="pie" ref="pie" autoresize />
                </figure>

            </div>
        </div>
        <div class="col-7 mt-2">
            <div class="card p-2">

                <figure>
                    <v-chart :option="line" ref="line" theme="ovilia-green" autoresize style="min-height: 240px;" />
                </figure>
            </div>
        </div>
        <div class="col-5 mt-2">
            <div class="card p-2">
                <figure style="height: 240px;">
                    <v-chart :option="scatter" autoresize />
                </figure>
            </div>
        </div>
    </div>
</template>


<script>
import LayoutApp from '@/Layouts/App.vue';
import getBar from './data/bar';
import getLine from './data/line';
import pie from './data/pie'
import scatter from './data/scatter'
export default {
    layout: LayoutApp,
    data() {
        return {
            bar: getBar(),
            line: getLine(),
            pie: pie,
            scatter: scatter
        }
    },
    props: {
        test: String
    }
}
</script>
