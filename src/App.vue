<template>
    <div class="main">
        <div class="container">
            <div class="row">
                <div class="col page-header mt-3">
                    <h1>Open Courses</h1>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col util">
                    <button class="btn btn-primary btn-block" @click="addFlag=true">Add Row</button>
                </div>
            </div>
            <div class="row mt-1">
                <ve-table class="table" style="border-radius:6px"
                          :columns="columns"
                          :table-data="tableData"
                          :fixed-header="false"
                          :row-style-option="rowStyleOption"/>
            </div>
        </div>
        <template>
            <transition name="fade">
                <div class="EditPanel" v-show="addFlag">
                    <div class="mask">
                        <div class="title">
                            Add Panel
                            <span class="close" @click="addFlag=false">x</span>
                        </div>
                        <div class="content">
                            <form role="form">
                                <div class="form-group">
                                    <label id="input-name">Course Name:<br/>
                                        <input class="form-control" type="text" name="cname" placeholder="Course Name" v-model="addProps.cname"/>
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label id="input-code">Course Code:<br/>
                                        <input class="form-control" type="text" name="code" placeholder="Course Code" v-model="addProps.code"/>
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label id="input-language">Language:<br/>
                                        <div class="radio">
                                            <label><input type="radio" value="Chinese" v-model="addProps.language"/>Chinese<br/></label>
                                            <label><input type="radio" value="English" v-model="addProps.language"/>English<br/></label>
                                            <label><input type="radio" value="Bilingual" v-model="addProps.language"/>Bilingual<br/></label>
                                        </div>
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label id="input-teacher">Teacher:<br/>
                                        <input class="form-control" type="text" name="teacher" placeholder="Teacher" v-model="addProps.teacher"/>
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label id="input-date">Date:<br/>
                                        <input class="form-control" type="date" name="date" id="date-value" v-model="addProps.cdate"/>
                                    </label>
                                    &nbsp;
                                    <label id="input-time">Time:<br/>
                                        <input class="form-control" type="time" name="time" v-model="addProps.time"/>
                                    </label>
                                    &nbsp;
                                    <label id="input-duration">Duration:<br/>
                                        <div class="input-group duration1">
                                            <input class="form-control" type="number" name="duration" value=2 min=1 max=4 step=0.5 v-model="addProps.duration"/>
                                            <div class="input-group-append">
                                                <span class="input-group-text">hour(s)</span>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label id="input-location">Location:<br/>
                                        <select class="form-control" v-model="addProps.slocation">
                                            <option value="Teaching Building No.1 Lecture Hall">Teaching Building No.1 Lecture Hall</option>
                                            <option value="Research Building Lecture Hall">Research Building Lecture Hall</option>
                                            <option value="Library Conference Hall">Library Conference Hall</option>
                                            <option value="Activity Room">Activity Room</option>
                                        </select>
                                    </label>
                                </div>
                            </form>
                        </div>
                        <div class="footer">
                            <button class="btn btn-primary" @click="addRow()">Add</button>
                            &nbsp;
                            <button class="btn btn-primary" @click="addFlag=false">Cancel</button>
                        </div>
                    </div>
                </div>
            </transition>
        </template>
        <template>
            <transition name="fade">
                <div class="EditPanel" v-show="editFlag">
                    <div class="mask">
                        <div class="title">
                            Edit Panel
                            <span class="close" @click="editFlag=false">x</span>
                        </div>
                        <div class="content">
                            <form role="form">
                                <div class="form-group">
                                    <label id="input-name">Course Name:<br/>
                                        <input class="form-control" type="text" name="cname" placeholder="Course Name" v-model="editProps.cname"/>
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label id="input-code">Course Code:<br/>
                                        <input class="form-control" type="text" name="code" placeholder="Course Code" v-model="editProps.code"/>
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label id="input-language">Language:<br/>
                                        <div class="radio">
                                            <label><input type="radio" value="Chinese" v-model="editProps.language"/>Chinese<br/></label>
                                            <label><input type="radio" value="English" v-model="editProps.language"/>English<br/></label>
                                            <label><input type="radio" value="Bilingual" v-model="editProps.language"/>Bilingual<br/></label>
                                        </div>
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label id="input-teacher">Teacher:<br/>
                                        <input class="form-control" type="text" name="teacher" placeholder="Teacher" v-model="editProps.teacher"/>
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label id="input-date">Date:<br/>
                                        <input class="form-control" type="date" name="date" id="date-value" v-model="editProps.cdate"/>
                                    </label>
                                    &nbsp;
                                    <label id="input-time">Time:<br/>
                                        <input class="form-control" type="time" name="time" v-model="editProps.time"/>
                                    </label>
                                    &nbsp;
                                    <label id="input-duration">Duration:<br/>
                                        <div class="input-group duration1">
                                            <input class="form-control" type="number" name="duration" value=2 min=1 max=4 step=0.5 v-model="editProps.duration"/>
                                            <div class="input-group-append">
                                                <span class="input-group-text">hour(s)</span>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label id="input-location">Location:<br/>
                                        <select class="form-control" v-model="editProps.slocation">
                                            <option value="Teaching Building No.1 Lecture Hall">Teaching Building No.1 Lecture Hall</option>
                                            <option value="Research Building Lecture Hall">Research Building Lecture Hall</option>
                                            <option value="Library Conference Hall">Library Conference Hall</option>
                                            <option value="Activity Room">Activity Room</option>
                                        </select>
                                    </label>
                                </div>
                            </form>
                        </div>
                        <div class="footer">
                            <button class="btn btn-primary" @click="editRowComplete()">Edit</button>
                            &nbsp;
                            <button class="btn btn-primary" @click="editRowCancel()">Cancel</button>
                        </div>
                    </div>
                </div>
            </transition>
        </template>
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
    data() {
        return {
            addFlag: false,
            editFlag: false,
            editIndex: 0,
            addProps: {
                cname: "",
                code: "",
                language: "Chinese",
                teacher: "",
                cdate: curDay,
                time: "00:00",
                slocation: "Activity Room",
                duration: 2,
            },
            editProps: {
                cname: "",
                code: "",
                language: "Chinese",
                teacher: "",
                cdate: curDay,
                time: "00:00",
                slocation: "Activity Room",
                duration: 2,
            },
            rowStyleOption: {
                stripe: true,
            },
            columns: [
                { field: "name", key: "a", title: "Course Name", align: "center" },
                { field: "code", key: "b", title: "Course Code", align: "center" },
                { field: "language", key: "c", title: "Language", align: "center" },
                { field: "teacher", key: "d", title: "Teacher", align: "center"},
                { field: "date", key: "e", title: "Date", align: "center"},
                { field: "time", key: "f", title: "Time", align: "center"},
                { field: "location", key: "g", title: "Location", align: "center"},
                { field: "duration", key: "h", title: "Duration(hours)", align: "center"},
                // eslint-disable-next-line no-unused-vars
                { field: "", key: "i", title: "Operation", align: "center", renderBodyCell: ({ row, column, rowIndex }, h) => {
                        return (
                                <span>
                                    <button
                                            class="btn btn-primary"
                                            on-click={() => this.editRow(rowIndex)}
                                    >
                                        Edit
                                    </button>
                                    &nbsp;
                                    <button
                                            class="btn btn-danger"
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
                    date: "2022/09/30",
                    time: "19:00",
                    location: "Activity Room",
                    duration: 3.0
                },
                {
                    name: "How to Study CS",
                    code: "CS666",
                    language: "Bilingual",
                    teacher: "XXX",
                    date: "2022/09/29",
                    time: "16:20",
                    location: "Research Building Lecture Hall",
                    duration: 2.5
                },
                {
                    name: "My Example 1",
                    code: "CS111",
                    language: "Bilingual",
                    teacher: "XXX",
                    date: "2022/09/30",
                    time: "16:20",
                    location: "Research Building Lecture Hall",
                    duration: 2.5
                },
                {
                    name: "My Example 2",
                    code: "CS222",
                    language: "Bilingual",
                    teacher: "XXX",
                    date: "2022/10/01",
                    time: "16:20",
                    location: "Research Building Lecture Hall",
                    duration: 2.5
                },
                {
                    name: "My Example 3",
                    code: "CS333",
                    language: "Bilingual",
                    teacher: "XXX",
                    date: "2022/10/02",
                    time: "16:20",
                    location: "Research Building Lecture Hall",
                    duration: 2.5
                }
            ],
        };
    },
    methods: {
        editRow(rowIndex) {
            this.editIndex = rowIndex

            this.editProps.cname = this.tableData[rowIndex].name
            this.editProps.code = this.tableData[rowIndex].code
            this.editProps.language = this.tableData[rowIndex].language
            this.editProps.teacher = this.tableData[rowIndex].teacher
            this.editProps.cdate = this.tableData[rowIndex].date.replaceAll('/', '-')
            this.editProps.time = this.tableData[rowIndex].time
            this.editProps.slocation = this.tableData[rowIndex].location
            this.editProps.duration = this.tableData[rowIndex].duration

            this.editFlag = true
        },
        editRowComplete() {
            this.tableData[this.editIndex].name = this.editProps.cname
            this.tableData[this.editIndex].code = this.editProps.code
            this.tableData[this.editIndex].language = this.editProps.language
            this.tableData[this.editIndex].teacher = this.editProps.teacher
            this.tableData[this.editIndex].date = this.editProps.cdate.replaceAll('-', '/')
            this.tableData[this.editIndex].time = this.editProps.time
            this.tableData[this.editIndex].location = this.editProps.slocation
            this.tableData[this.editIndex].duration = this.editProps.duration

            this.editFlag = false
        },
        editRowCancel() {
          this.editFlag = false
        },
        deleteRow(rowIndex) {
            this.tableData.splice(rowIndex, 1)
        },
        addRow() {
            if ( this.addProps.cdate.length !== 10) {
                alert("Date must not be empty!")
                return
            }
            if ( this.addProps.time.length !== 5) {
                alert("Time must not be empty!")
                return
            }
            if ( this.addProps.duration.length === 0) {
                alert("Duration must not be empty!")
                return
            }
            if ( this.addProps.cname.match("^[A-Za-z]+$") == null) {
                alert("Course Name must be nonempty letters!")
                return
            }
            if ( this.addProps.code.match("^[A-Za-z0-9]+$") == null) {
                alert("Course Code must be nonempty combination of letters & numbers")
                return
            }
            if ( this.addProps.teacher.match("^[A-Za-z]+$") == null) {
                alert("Teacher Name must be nonempty letters!")
                return
            }
            const newDate = new Date( this.addProps.cdate + ' ' +  this.addProps.time)
            const newStart = newDate.getTime()
            const newEnd = new Date(new Date(newDate).setHours(newDate.getHours() +  this.addProps.duration)).getTime()
            for (let i = 0; i < this.tableData.length; i++) {
                if (this.tableData[i].teacher ===  this.addProps.teacher) {
                    alert("Teacher overworking!")
                    return
                }
                if (this.tableData[i].name ===  this.addProps.cname) {
                    alert("Student overworking!")
                    return
                }
                if (this.tableData[i].code ===  this.addProps.code) {
                    alert("Inconsistent Course Name & Course Code!")
                    return
                }
                if (this.tableData[i].location !==  this.addProps.slocation) {
                    continue
                }
                const oldDate = new Date(this.tableData[i].date + ' ' + this.tableData[i].time)
                const oldStart = oldDate.getTime()
                const oldEnd = new Date(new Date(oldDate).setHours(oldDate.getHours() + this.tableData[i].duration)).getTime()
                if (!(newEnd <= oldStart || newStart >= oldEnd)) {
                    alert("Classroom occupation overlaps!")
                    return
                }
            }
            this.tableData.push(
                    {
                        name:  this.addProps.cname,
                        code:  this.addProps.code,
                        language:  this.addProps.language,
                        teacher:  this.addProps.teacher,
                        date:  this.addProps.cdate.replaceAll('-', '/'),
                        time:  this.addProps.time,
                        location:  this.addProps.slocation,
                        duration:  this.addProps.duration
                    }
            )
             this.addProps.cname = ""
             this.addProps.code = ""
             this.addProps.language = "Chinese"
             this.addProps.teacher = ""
             this.addProps.cdate = curDay
             this.addProps.time = "00:00"
             this.addProps.slocation = "Activity Room"
             this.addProps.duration = 2
        }
    },
};
</script>


<style>
.main {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    overflow: auto;
    background-image: linear-gradient(to bottom right, #7A88FF, #7AFFAF);
}

.page-header {
    background-color: white;
    border-radius: 6px;
}

.table {
    position: fixed;
    overflow: auto;
}

.EditPanel {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
}

.EditPanel .mask {
    width: 40%;
    height: 80%;
    background-color: #fff;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    box-sizing: border-box;
    border-radius: 6px;
    padding: 1em;
    display: flex;
    flex-direction: column;
}

.EditPanel .mask .title {
    height: 10%;
    font-size: x-large;
    align-self: center;
}

.EditPanel .mask .title .close {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;
    right: 10px;
    top: 10px;
    border: 2px solid #fff;
    cursor: pointer;
    background-color: dimgrey;
    text-align: center;
    line-height: 22px;
}

.EditPanel .mask .content {
    width: 90%;
    height: 82%;
    overflow: auto;
    align-self: center;
}

.EditPanel .mask .footer {
    height: 8%;
    align-self: center;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s
}
.fade-enter, .fade-leave-to {
    opacity: 0
}
</style>
