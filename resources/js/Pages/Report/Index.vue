<template>
    <div class="">
        <div class="card">
            <div class="card-header px-2">
                <h5 class="m-0">
                    Users Total Order
                    <span class="float-end">
                        <button class="btn btn-sm btn-primary">
                            <i class="bi bi-printer-fill"></i>
                        </button>
                        <button class="btn btn-sm btn-primary mx-1">
                            <i class="bi bi-file-spreadsheet-fill"></i>
                        </button>
                    </span>
                </h5>
            </div>
            <div class="card-body p-1">
                <EasyDataTable :headers="headers" :items="items" />
            </div>
        </div>
    </div>
</template>

<script>
import LayoutApp from '@/Layouts/App.vue';
export default {
    layout: LayoutApp,
    data() {
        return {
            headers: [
                { text: "Name", value: "name" },
                { text: "Order Amount", value: "amount", sortable: true },
                { text: "Order Count", value: "count", sortable: true },
                // { text: "Age", value: "age", sortable: true }
            ],

            items: [
                { "name": "Curry", "amount": 1780000, "count": 77, "age": 20 },
                { "name": "James", "amount": 180000, "count": 75, "age": 21 },
                { "name": "Jordan", "amount": 181000, "count": 73, "age": 22 },
                { "name": "Davinci", "amount": 181000, "count": 73, "age": 22 },
                { "name": "Mark", "amount": 180000, "count": 75, "age": 21 },
            ]
        }
    },
    props: {
    }
}
</script>
