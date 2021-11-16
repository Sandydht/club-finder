import { shallowMount } from '@vue/test-utils';
import SearchBar from '@/components/SearchBar.vue';

describe('SearchBar.vue', () => {
  let wrapper;
  let searchText;

  beforeAll(() => {
    wrapper = shallowMount(SearchBar);
  });

  test('should be able to disabled button when the input is empty', async () => {
    searchText = '';
    await wrapper.find('input').setValue(searchText.toLocaleLowerCase());
    expect(wrapper.find('button').attributes('disabled')).toBe('');
  });

  test('should be able to send input value', async () => {
    searchText = 'Arsenal';
    await wrapper.find('input').setValue(searchText.toLocaleLowerCase());
    await wrapper.find('form').trigger('submit');
    expect(wrapper.emitted('handleSubmit')[0][0]).toBe(searchText.toLocaleLowerCase());
  });
});
