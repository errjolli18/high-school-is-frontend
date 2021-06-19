import { ContentPage } from '../styled/Components';
import { Input, ActionButton, Form, Label } from '../styled/Components';
import { AuthContext } from '../App';
import apiLink from '../API';
import React, { useContext, useState, useEffect } from 'react';
 
// Interfaces (Types) used to define the blueprint of state variables
type FormData = {
    justified: number,
    date: string,
    studentID: string,
    teacherID: string,
    courseID: string
};
 
type StudentData = {
    name: string,
    studentID: string
}
 
type CourseData = {
    id: string,
    course: string
}
 
const GradeData = (props: any) => {
    const authContext = useContext(AuthContext);
    const [form, setForm] = useState<FormData>({
        justified: 1,
        date: "2021-06-15",
        studentID: "6",
        teacherID: authContext.userId.toString(),
        courseID: "1"
    });
 
    const [teacherCourses, setCourses] = useState<CourseData[]>();
    const [studentData, setStudents] = useState<StudentData[]>();
 
    useEffect(() => {
        if (authContext.authenticated) {
            fetch(`${apiLink}/teachers/students`, {
                method: 'post',
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${authContext.jwtToken}`
                },
                body: JSON.stringify({userId: authContext.userId})
            })
            .then(res => res.json())
            .then(res => {
                if (res.status === "ok") {
                    setStudents(res.result);
                }else{
                    alert(res.message);
                }
            }).catch(err => console.log(err));
 
            fetch(`${apiLink}/teachers/courses`, {
                method: 'post',
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${authContext.jwtToken}`
                },
                body: JSON.stringify({userId: authContext.userId})
            })
            .then(res => res.json())
            .then(res => {
                if (res.status === "ok") {
                    setCourses(res.result);
                }else{
                    alert(res.message);
                }
            }).catch(err => console.log(err));
        }
    }, []);
 
    const onSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const body = {
            ...form
        }
        await fetch(`${apiLink}/teachers/assignAttendance`, {
            method: 'post',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${authContext.jwtToken}`
            },
            body: JSON.stringify(body)
        }).then(res => res.json())
            .then(res => {
                if (res.status === "ok") {
                    alert("Attendance assigned successfully!");
                } else {
                    alert(res.message);
                }
            }).catch(err => console.log(err));
    };
 
    const onChange = (event: React.ChangeEvent) => {
        event.preventDefault();
        const { name, value } = event.target as any;
        setForm({ ...form, [name]: value });
    }
 
    return (
        <Form>
            <Label>
                Tipi i Mungeses:
                <select onChange={onChange} className="bg-gray-300 appearance-none rounded 
                w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white 
                focus:border-purple-500" name="justified">
                    <option value="1">Me Arsye</option>
                    <option value="0">Pa Arsye</option>
                </select>
            </Label>
            <Label>
                Data:
                <Input
                    name="date"
                    onChange={onChange}
                    type="date" />
            </Label>
            <Label>
                Studenti:
                <select onChange={onChange} className="bg-gray-300 appearance-none rounded 
                w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white 
                focus:border-purple-500" name="studentID">
                    {studentData?.map( student => (
                        <option value={student.studentID}>{student.name}</option>
                    ))}
                </select>
            </Label>
            <Label>
                Lenda:
                <select onChange={onChange} className="bg-gray-300 appearance-none rounded 
                w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white 
                focus:border-purple-500" name="courseID">
                    {teacherCourses?.map( course => (
                        <option value={course.id}>{course.course}</option>
                    ))}
                </select>
            </Label>
            <ActionButton
                className="asldkf"
                onClick={onSubmit}>
                Vendos Mungesen
            </ActionButton>
        </Form>
    );
}
 
const Grades = (props: any) => {
    return (
        <ContentPage title="Mungesat">
            <div className="p-10 h-full flex items-start justify-start gap-16">
                <div className="flex flex-col items-stretch w-full">
 
                    <div className="w-full mb-8 bg-gray-100 shadow-xl p-10 rounded-3xl">
                        <div className="flex items-center justify-between pb-2 border-b-2 border-gray-300">
                            <p className="text-2xl text-blue-900"> Vendos Mungese </p>
                        </div>
 
                        <GradeData></GradeData>
                    </div>
 
                </div>
            </div>
        </ContentPage>
    );
}
 
export default Grades;