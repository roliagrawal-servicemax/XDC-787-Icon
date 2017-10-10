import React from 'react';
import { default as Enzyme, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import ImgIcon from './ImgIcon';

Enzyme.configure({ adapter: new Adapter() });
describe('ImgIcon', () => {
  it('image type of icon', () => {
    const component = shallow(<ImgIcon src="./address" alt="address" type="img" />);
    expect(component.find('img').length).to.equal(1);
  });
  it('font-awesome properies set', () => {
    const component = mount(<ImgIcon src="./address" alt="address" type="img" />);
    expect(component.props().src).to.equal('./address');
    expect(component.props().alt).to.equal('address');
  });
  it('font-awesome dom element', () => {
    const component = mount(<ImgIcon src="./address" alt="address" type="img" />);
    expect(component.contains(<img src="./address" alt="address" />));
  });
});
