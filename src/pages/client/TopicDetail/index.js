import React from 'react';
import { useParams } from 'react-router-dom'
import TableData from '../../../components/TableData';


export default function TopicDetail(){
    const {topicId} = useParams();
    const topic = {id: topicId, name: "topic1", image: "", status: 1}
    const tests = [
        {testId: 1, dateCreate: '2021-09-01', quantity: 60, status: 1, testName: 'test1', time: 60},
        {testId: 2, dateCreate: '2021-09-01', quantity: 60, status: 1, testName: 'test2', time: 60},
        {testId: 3, dateCreate: '2021-09-01', quantity: 60, status: 1, testName: 'test3', time: 60},
        {testId: 4, dateCreate: '2021-09-01', quantity: 60, status: 1, testName: 'test4', time: 60},
        {testId: 5, dateCreate: '2021-09-01', quantity: 60, status: 1, testName: 'test5', time: 60},

    ]
    const titiles = ['testId', 'dateCreate', 'quantity', 'testName']
    return (
        <div>
            <h1>topicDetail</h1>
            <TableData items={tests} titles={titiles} properties={['testId', 'dateCreate', 'quantity', 'testName']} linkAction={'/subjects/'}></TableData>
        </div>
    )
}