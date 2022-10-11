<template>
    <div>
        <AddPanel/>
        <button>Add</button>
        <ve-table :columns="columns" :table-data="tableData" />
    </div>
</template>

<script>
import AddPanel from "@/components/AddPanel";
export default {
    components: {AddPanel},
    data() {
        return {
            columns: [
                { field: "name", key: "a", title: "Course Name", align: "center" },
                { field: "code", key: "b", title: "Course Code", align: "center" },
                { field: "language", key: "c", title: "Language", align: "center" },
                { field: "teacher", key: "d", title: "Teacher", align: "center"},
                { field: "date", key: "e", title: "Date", align: "center"},
                { field: "time", key: "f", title: "Time", align: "center"},
                { field: "location", key: "g", title: "Location", align: "center"},
                { field: "duration", key: "h", title: "Duration", align: "center"},
                // eslint-disable-next-line no-unused-vars
                { field: "", key: "i", title: "Operation", align: "center", renderBodyCell: ({ row, column, rowIndex }, h) => {
                        return (
                                <span>
                                    <button
                                            class="button-operation"
                                            on-click={() => this.editRow(rowIndex)}
                                    >
                                        Edit
                                    </button>
                                    &nbsp;
                                    <button
                                            class="button-operation"
                                            on-click={() => this.deleteRow(rowIndex)}
                                    >
                                        Delete
                                    </button>
                                </span>
                        );}
                }
            ],
            tableData: [
                {
                    name: "OOAD",
                    code: "CS309",
                    language: "English",
                    teacher: "XXX",
                    date: "2022-09-30",
                    time: "19:00",
                    location: "Activity Room",
                    duration: 3.0
                },
                {
                    name: "How to Study CS",
                    code: "CS666",
                    language: "Bilingual",
                    teacher: "XXX",
                    date: "2022-09-29",
                    time: "16:20",
                    location: "Research Building Lecture Hall",
                    duration: 2.5
                }
            ],
        };
    },
    methods: {
        editRow(rowIndex) {
            alert(`eidt row number:${rowIndex}`);
        },
        deleteRow(rowIndex) {
            this.tableData.splice(rowIndex, 1);
        },
    },
};
</script>
