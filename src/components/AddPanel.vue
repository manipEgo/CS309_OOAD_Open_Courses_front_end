<template>
    <div class="AddPanel">
        <label id="input-name">Course Name:
            <input type="text" name="cname" placeholder="Course Name" v-model="cname"/>
        </label>
        <br/>
        <label id="input-code">Course Code:
            <input type="text" name="code" placeholder="Course Code" v-model="code"/>
        </label>
        <br/>
        <label id="input-language">Language:<br>
            <input type="radio" name="language" value="chinese" v-model="language"/>Chinese
            <input type="radio" name="language" value="english" v-model="language"/>English
            <input type="radio" name="language" value="bilingual" v-model="language"/>Bilingual
        </label>
        <br/>
        <label id="input-teacher">Teacher:
            <input type="text" name="teacher" placeholder="Teacher" v-model="teacher"/>
        </label>
        <br/>
        <label id="input-date">Date:
            <input type="date" name="date" id="date-value" v-model="date"/>
        </label>
        <br/>
        <label id="input-time">Time:
            <input type="time" name="time" v-model="time"/>
        </label>
        <br/>
        <label id="input-location">Location:
            <select v-model="slocation">
                <option value="tb1lh">Teaching Building No.1 Lecture Hall</option>
                <option value="rblh">Research Building Lecture Hall</option>
                <option value="lch">Library Conference Hall</option>
                <option value="ar">Activity Room</option>
            </select>
        </label>
        <br/>
        <label id="input-duration">Duration:
            <input type="number" name="duration" value=2 min=1 max=4 step=0.5 v-model="duration"/>
        </label>
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
        name: 'AddPanel',
        data() {
            return {
                cname:"",
                code:"",
                language:"chinese",
                teacher:"",
                date:curDay,
                time:"",
                slocation:"tb1lh",
                duration:2
            }
        }
    }
</script>