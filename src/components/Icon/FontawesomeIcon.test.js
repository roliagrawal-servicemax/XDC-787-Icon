import React from 'react';
import { default as Enzyme, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import FontawesomeIcon from './FontawesomeIcon';

Enzyme.configure({ adapter: new Adapter() });
describe('FontawesomeIcon', () => {
  it('font-awesome type of icon', () => {
    const component = shallow(<FontawesomeIcon name="fa-address-book-o" />);
    expect(component.find('i').length).to.equal(1);
  });
  it('font-awesome properies set', () => {
    const component = mount(<FontawesomeIcon name="fa-address-book-o" className="addressClass" />);
    expect(component.props().name).to.equal('fa-address-book-o');
    expect(component.props().className).to.equal('addressClass');
  });
  it('font-awesome dom element', () => {
    const component = mount(<FontawesomeIcon name="fa-address-book-o" />);
    expect(component.contains(<i className="fa fa-address-book-o" aria-hidden="true" />));
  });
});
