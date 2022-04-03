import {
    MenuOutlined,
    HomeOutlined,
    SearchOutlined,
    PlusOutlined,
    ExperimentFilled,
    QuestionOutlined,
    ExclamationCircleOutlined,
    UserAddOutlined
} from '@ant-design/icons';
import './index.css'

const NavList = () => {
    return (
        <div className='navlist-container'>
            <div className='navlist-left'>
                <div><MenuOutlined style={{color: 'white'}} /></div>
                <div><HomeOutlined  style={{color: 'white'}} /></div>
                <div><SearchOutlined  style={{color: 'white'}}  /></div>
            </div>
            <div className='navlist-right'>
                <div><PlusOutlined  style={{color: 'white'}}  /></div>
                <div><ExperimentFilled  style={{color: 'white'}}  /></div>
                <div><QuestionOutlined  style={{color: 'white'}}  /></div>
                <div><ExclamationCircleOutlined  style={{color: 'white'}}  /></div>
                <div><UserAddOutlined  style={{color: 'white'}}  /></div>
            </div>
        </div>
    )
}

export default NavList
