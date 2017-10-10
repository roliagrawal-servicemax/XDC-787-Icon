import React from 'react';
import { default as Enzyme, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import Icon from './icon';
Enzyme.configure({ adapter: new Adapter() });
describe('Icon', () => {
  it('it will give font-awesome type of icon', () => {
    const component = mount(<Icon name="fa-address-book-o" type="font-awesome" />);
    expect(component.find('i').length).to.equal(1);
  });
  it('it will give image type of icon', () => {
    const component = mount(<Icon src="./address" alt="address" type="img" />);
    expect(component.find('img').length).to.equal(1);
  });
  it('it will give image properties', () => {
    const component = mount(<Icon src="./address" alt="address" type="img" />);
    expect(component.props().src).to.equal('./address');
    expect(component.props().alt).to.equal('address');
  });
  it('it will give font-awesome properties', () => {
    const component = mount(<Icon name="fa-address-book-o" type="font-awesome" />);
    expect(component.props().type).to.equal('font-awesome');
    expect(component.props().name).to.equal('fa-address-book-o');
  });
});
