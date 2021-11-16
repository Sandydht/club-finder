import { shallowMount } from '@vue/test-utils';
import ClubItem from '@/components/ClubItem.vue';

describe('ClubItem.vue', () => {
  let wrapper;

  beforeAll(async () => {
    wrapper = shallowMount(ClubItem);

    await wrapper.setProps({
      name: 'Arsenal',
      stadium: 'Emirates Stadium',
      fanArt: 'https://www.thesportsdb.com/images/media/team/fanart/xyusxr1419347566.jpg',
      description: 'Arsenal Football Club is a professional football club based in Holloway, London which currently plays in the Premier League, the highest level of English football.',
    });
  });

  test('should display club image', async () => {
    expect(wrapper.find('img').attributes('src')).toBe('https://www.thesportsdb.com/images/media/team/fanart/xyusxr1419347566.jpg');
    expect(wrapper.find('img').attributes('alt')).toBe('Arsenal image');
  });

  test('should display club name', () => {
    expect(wrapper.find('[data-test="club-name"]').text()).toBe('Arsenal');
  });

  test('should display club stadium', () => {
    expect(wrapper.find('[data-test="club-stadium"]').text()).toBe('Emirates Stadium');
  });

  test('should display club description', () => {
    expect(wrapper.find('[data-test="club-description"]').text()).toBe('Arsenal Football Club is a professional football club based in Holloway, London which currently plays in the Premier League, the highest level of English football.');
  });
});
