import { shallowMount } from '@vue/test-utils';
import AlertMessage from '@/components/AlertMessage.vue';

describe('AlertMessage.vue', () => {
  test('should display message', async () => {
    const wrapper = shallowMount(AlertMessage);
    await wrapper.setProps({ message: 'Keyword not found' });
    expect(wrapper.find('p').text()).toContain('Keyword not found');
  });
});
