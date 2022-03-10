import RouterService from './router-service';
import AppViewService, { ViewConfiguration } from './app-view-service';

class MainViewService extends AppViewService {
  public getViewType(): 'application' | 'channel' | '' {
    const col: any = this.getViewCollection();
    return col ? (col.useWatcher ? 'channel' : 'application') : '';
  }

  public getViewCollection() {
    return this.getConfiguration().collection;
  }

  public select(channelId: string, configuration?: ViewConfiguration) {
    if (channelId !== this.getId()) {
      RouterService.push(RouterService.generateRouteFromState({ channelId, tabId: '' }));
    }
    super.select(channelId, configuration);
  }
}

export default new MainViewService();