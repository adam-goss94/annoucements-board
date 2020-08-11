import React from 'react';
import { shallow } from 'enzyme';
import { AnnouncementsComponent } from './Annoucements';

describe('Component Announcement', () => {
  it('should render without crashing', () => {
    const component = shallow(<AnnouncementsComponent />);
    expect(component).toBeTruthy();
  });
});
