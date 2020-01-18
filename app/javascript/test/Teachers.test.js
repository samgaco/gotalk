import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import Teachers from '../components/Teachers'
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import { bool } from 'prop-types';
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";


const mockStore = configureMockStore();

configure({adapter: new Adapter()})

const store = mockStore({
    startup: { complete: false }
  });

describe('Shallow <Teachers/>', () => {
    const props = {current_user: {email: "whatever@gmail.com"}}
    it('renders without crashing', () => {
     const wrapper = shallow(
     <Provider store={store}>
     <Teachers {...props}/>
     </Provider>
     )
    }); 
 });
