<template>
    <div>
        <template>
            <div class="AddPanel">
                <div>
                    <label id="input-name">Course Name:<br/>
                        <input type="text" name="cname" placeholder="Course Name" v-model="cname"/>
                    </label>
                </div>
                <div>
                    <label id="input-code">Course Code:<br/>
                        <input type="text" name="code" placeholder="Course Code" v-model="code"/>
                    </label>
                </div>
                <div>
                    <label id="input-language">Language:<br/>
                        <select v-model="language">
                            <option value="Chinese">Chinese</option>
                            <option value="English">English</option>
                            <option value="Bilingual">Bilingual</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label id="input-teacher">Teacher:<br/>
                        <input type="text" name="teacher" placeholder="Teacher" v-model="teacher"/>
                    </label>
                </div>
                <div>
                    <label id="input-date">Date:<br/>
                        <input type="date" name="date" id="date-value" v-model="cdate"/>
                    </label>
                </div>
                <div>
                    <label id="input-time">Time:<br/>
                        <input type="time" name="time" v-model="time"/>
                    </label>
                </div>
                <div>
                    <label id="input-location">Location:<br/>
                        <select v-model="slocation">
                            <option value="Teaching Building No.1 Lecture Hall">Teaching Building No.1 Lecture Hall</option>
                            <option value="Research Building Lecture Hall">Research Building Lecture Hall</option>
                            <option value="Library Conference Hall">Library Conference Hall</option>
                            <option value="Activity Room">Activity Room</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label id="input-duration">Duration:<br/>
                        <input type="number" name="duration" value=2 min=1 max=4 step=0.5 v-model="duration"/>
                    </label>
                </div>
                <div>
                    <button @click="addRow()">Add</button>
                </div>
            </div>
        </template>
        <ve-table :columns="columns" :table-data="tableData" />
    </div>
</template>

<script>
let date = new Date()
let yyyy = date.getFullYear()
let MM = (date.getMonth() + 1) < 10 ? ("0" + (date.getMonth() + 1)) : (date.getMonth() + 1)
let dd = date.getDate() < 10 ? ("0" + date.getDate()) : date.getDate()

let curDay = yyyy + '-' + MM + '-' + dd;
// eslint-disable-next-line no-unused-vars
document.addEventListener("DOMContentLoaded", (event) => {
    const date_form = document.getElementById("date-value")
    date_form.setAttribute("value", curDay)
    date_form.setAttribute("min", curDay)
    console.log(date_form)
});

export default {
    //components: {AddPanel},
    data() {
        return {
            cname: "",
            code: "",
            language: "Chinese",
            teacher: "",
            cdate: curDay,
            time: "",
            slocation: "Activity Room",
            duration: 2,
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
        addRow() {
            if (this.cname.match("^[A-Za-z]+$") == null) {
                alert(this.cname + "Course Name must be letters!")
                return
            }
            if (this.teacher.match("^[A-Za-z]+$") == null) {
                alert(this.teacher + "Teacher Name must be letters!")
                return
            }
            this.tableData.push(
                    {
                        name: this.cname,
                        code: this.code,
                        language: this.language,
                        teacher: this.teacher,
                        date: this.cdate,
                        time: this.time,
                        location: this.slocation,
                        duration: this.duration
                    }
            )
        }
    },
};
</script>


<style>
.AddPanel {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
}
.AddPanel > div {
    height: 50px;
    flex: 1;
}
</style>
