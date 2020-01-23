import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import Scheduler from '../components/Scheduler/Scheduler'
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import { bool } from 'prop-types';


configure({adapter: new Adapter()})

describe('Shallow <Scheduler/>', () => {
    const props = {current_user: {email: "whatever@gmail.com"}}
    it('renders without crashing', () => {
     const wrapper = shallow(<Scheduler {...props}/>)
    }); 
 });

 
 describe('Full mounted <Scheduler/>', () => {
    const props = {current_user: {email: "whatever@gmail.com"}}
    it('renders without crashing', () => {
     const wrapper = mount(<Scheduler {...props}/>)
     wrapper.unmount()
    }); 
 });