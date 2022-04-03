import { useState } from 'react'
import { Input, DatePicker, Space, Button, Divider, Radio } from 'antd'
import { PlusOutlined, CreditCardOutlined, EllipsisOutlined, MailOutlined, UnorderedListOutlined } from '@ant-design/icons'
import moment from 'moment';
import './index.css'

const initialTask = {
    content: '',
    description: '',
    date: '',
    id: ''
}

const dateFormat = 'YYYY/MM/DD';

const TaskList = () => {
    const [isShow, setIsShow] = useState(false)
    const [taskList, setTaskLisT] = useState([])
    const [task, setTask] = useState(initialTask)

    const handleAddTask = () => {
        setTaskLisT([...taskList, { ...task, id: Date.now() }])
        setTask(initialTask)
    }

    const handleCancel = () => {
        setIsShow(false)
        setTask(initialTask)
    }

    return (
        <div className='tasklist-container'>
            <div className='tasklist-title'>
                <div className='tasklist-title-left'>收件箱</div>
                <div className='tasklist-title-right'>
                    <div><MailOutlined /></div>
                    <div><UnorderedListOutlined /></div>
                    <div><EllipsisOutlined /></div>
                </div>
            </div>
            <Divider />
            <div className='tasklist-body'>
                <>
                    {
                        taskList.length > 0 ? taskList.map((task) => (
                            <div key={task.id}>
                                <Radio onChange={() => setTaskLisT(taskList.filter((i) => i.id !== task.id))}>
                                    <span>{task.content}</span><br />
                                    <CreditCardOutlined />
                                    <span style={{marginLeft: 5, fontSize: 14}}>{task.date._i}</span>
                                </Radio>
                                <Divider />
                            </div>
                        )) : null
                    }
                </>
                <div className='add-task' onClick={() => setIsShow(true)} style={{ display: isShow ? 'none' : 'block' }} >
                    <PlusOutlined />
                    <span style={{marginLeft: 5, fontSize: 14}}>添加任务</span>
                </div>
            </div>
            <div style={{ display: isShow ? 'block' : 'none' }}>
                <div className='add-input'>
                    <Input
                        placeholder="例如:周日上午11点家庭聚餐#私人"
                        bordered={false}
                        value={task.content}
                        onChange={({ target: { value } }) => setTask({ ...task, content: value })}
                    />
                    <Input
                        placeholder="描述"
                        bordered={false}
                        value={task.description}
                        onChange={({ target: { value } }) => setTask({ ...task, description: value })}
                    />
                    <div>
                        <Space>
                            <DatePicker
                                id='date'
                                placeholder='日程安排'
                                value={task.date}
                                onChange={(_, dateString) => setTask({ ...task, date: moment(dateString, dateFormat) })}
                            />
                        </Space>
                    </div>
                </div>
                <div>
                    <Button danger type='primary' onClick={handleAddTask} disabled={task.content === ''}>添加任务</Button>
                    <Button onClick={handleCancel}>取消</Button>
                </div>
            </div>
        </div>
    )
}

export default TaskList
