import TableData from "../../../components/TableData";
import React from "react"; // Make sure to import React
import ChartTranscript from "../../../components/ChartTranscript";
import configs from "../../../configs";

const hisTests = [
    {hisId: 1, firstName: 'Do', lastName: 'Dung', testId: 1, testName: 'test 1', score: 8, timeInTest: 60 , time: "12/12/2020"},
    {hisId: 2, firstName: 'Do', lastName: 'Dung', testId: 2, testName: 'test 2', score: 8, timeInTest: 60 , time: "12/12/2020"},
    {hisId: 3, firstName: 'Do', lastName: 'Dung', testId: 3, testName: 'test 3', score: 8, timeInTest: 60 , time: "12/12/2020"},
    {hisId: 4, firstName: 'Do', lastName: 'Dung', testId: 4, testName: 'test 4', score: 8, timeInTest: 60 , time: "12/12/2020"},
    {hisId: 5, firstName: 'Do', lastName: 'Dung', testId: 5, testName: 'test 5', score: 8, timeInTest: 60 , time: "12/12/2020"},
    {hisId: 6, firstName: 'Do', lastName: 'Dung', testId: 6, testName: 'test 6', score: 8, timeInTest: 60 , time: "12/12/2020"},
    {hisId: 7, firstName: 'Do', lastName: 'Dung', testId: 7, testName: 'test 7', score: 8, timeInTest: 60 , time: "12/12/2020"},
    {hisId: 8, firstName: 'Do', lastName: 'Dung', testId: 8, testName: 'test 8', score: 8, timeInTest: 60 , time: "12/12/2020"},
    {hisId: 9, firstName: 'Do', lastName: 'Dung', testId: 9, testName: 'test 9', score: 9, timeInTest: 60 , time: "12/12/2020"},
    {hisId: 10, firstName: 'Do', lastName: 'Dung', testId: 10, testName: 'test 10', score: 10, timeInTest: 60 , time: "12/12/2020"},
    {hisId: 11, firstName: 'Do', lastName: 'Dung', testId: 11, testName: 'test 11', score: 11, timeInTest: 60 , time: "12/12/2020"},

]
const titles = ['Mã Bài Test', 'Họ Học Sinh', 'Tên Học Sinh', 'Tên Bài Test', 'Điểm', 'Thời Gian Thực Hiện', 'Thời Gian Thi']
const properties = ['hisId', 'firstName', 'lastName', 'testName', 'score', 'timeInTest', 'time']

function checkValue(hisItem){
    if (typeof(hisItem) === 'undefined'){
        return hisTests;
    }
    return hisItem;
}

export default function Transcript ({hisTests}){
    hisTests = checkValue(hisTests)
    return (
        <div className="history-test">
            <ChartTranscript/>
            <div className="Transcript ">
                <div className="transcript-title title text-center">
                    <h1>Transcript</h1>
                </div>
                <div className="p-5 mx-5">
                    <TableData  items={hisTests} titles={titles} properties={properties} linkAction={'/subjects/'}/>
                </div>
            </div>
        </div>
    )
}
