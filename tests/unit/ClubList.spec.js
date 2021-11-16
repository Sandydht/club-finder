import { mount } from '@vue/test-utils';
import ClubList from '@/components/ClubList.vue';
import ClubItem from '@/components/ClubItem.vue';

describe('ClubList.vue', () => {
  test('should display the list of clubs', async () => {
    const wrapper = mount(ClubList);
    await wrapper.setProps({ clubs: ['Arsenal', 'Aston Villa', 'Bournemouth', 'Brighton', 'Chelsea', 'Crystal Palace', 'Everton'] });
    const clubLength = wrapper.vm.$props.clubs.length;
    expect(wrapper.findAllComponents(ClubItem)).toHaveLength(clubLength);
  });
});
