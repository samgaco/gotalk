import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import { bool } from 'prop-types';


configure({adapter: new Adapter()})

describe('<App/>', () => {
   it('renders without crashing', () => {
    const wrapper = shallow(<App/>, {context: {}, disableLifecycleMethods: true})
    console.log(wrapper.debug())
   }); 
});

