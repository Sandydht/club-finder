import { flushPromises, mount } from '@vue/test-utils';
import App from '@/App.vue';

// Components
import ClubItem from '@/components/ClubItem.vue';
import AlertMessage from '@/components/AlertMessage.vue';

describe('App.vue', () => {
  let searchClub;
  let searchQuery;
  let wrapper;

  beforeEach(() => {
    searchClub = jest.fn();
    wrapper = mount(App);
  });

  test('should display club search results', async () => {
    searchQuery = 'Arsenal';

    await wrapper.find('input').setValue(searchQuery.toUpperCase());
    await wrapper.find('form').trigger('submit');

    searchClub(searchQuery.toUpperCase());

    expect(searchClub).toHaveBeenCalledTimes(1);
    expect(searchClub).toHaveBeenCalledWith(searchQuery.toUpperCase());

    searchClub.mockResolvedValueOnce([
      {
        name: 'Arsenal',
        stadium: 'Emirates Stadium',
        fanArt: 'https://www.thesportsdb.com/images/media/team/fanart/xyusxr1419347566.jpg',
        description: 'Arsenal Football Club',
      },
    ]);

    const searchResult = await searchClub();

    await wrapper.setData({
      data: {
        error: false,
        message: 'success',
        clubs: searchResult,
      },
    });

    await flushPromises();

    expect(wrapper.findComponent(AlertMessage).isVisible()).toBeFalsy();
    expect(wrapper.findAllComponents(ClubItem)).toHaveLength(1);
  });

  test('should display alert message when club not found', async () => {
    searchQuery = 'abcd';

    await wrapper.find('input').setValue(searchQuery.toUpperCase());
    await wrapper.find('form').trigger('submit');

    searchClub(searchQuery.toUpperCase());

    expect(searchClub).toHaveBeenCalledTimes(1);
    expect(searchClub).toHaveBeenCalledWith(searchQuery.toUpperCase());

    searchClub.mockRejectedValueOnce('abcd not found');

    expect.assertions(2);

    searchClub()
      .catch(async (error) => {
        await wrapper.setData({
          data: {
            error: true,
            message: error,
            clubs: [],
          },
        });

        await flushPromises();

        expect(wrapper.findComponent(AlertMessage).isVisible()).toBeTruthy();
        expect(wrapper.findAllComponents(ClubItem)).toHaveLength(0);
      });
  });
});
