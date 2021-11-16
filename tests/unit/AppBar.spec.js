import { shallowMount } from '@vue/test-utils';
import AppBar from '@/components/AppBar.vue';

describe('AppBar.vue', () => {
  test('should display the app title', () => {
    const wrapper = shallowMount(AppBar);
    expect(wrapper.text()).toContain('Club Finder');
  });
});
