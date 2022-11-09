import React from 'react';
import { action } from '@storybook/addon-actions';
import type { Story } from '@storybook/react';
import { setupI18n } from '../../util/setupI18n';
import type { Props } from './GifPicker';
import { GifPicker } from './GifPicker';
import enMessages from '../../../_locales/en/messages.json';

const i18n = setupI18n('en', enMessages);

export default {
  title: 'Components/GIFs/GifPicker',
};

const createProps = (overrideProps: Partial<Props> = {}): Props => ({
  i18n,
  onPickGif: action('onPickGif'),
  onClose: action('onClose'),
  recentGifs: [],
  ...overrideProps,
});

const withOverrideProps = (overrideProps?: Partial<Props>): Story => {
  const props = createProps(overrideProps);
  return () => <GifPicker {...props} />;
};

export const Default = withOverrideProps(undefined);

export const WithRecentGifs = withOverrideProps({
  recentGifs: [
    'Ju7l5y9osyymQ',
    'vX9WcCiWwUF7G',
    '11tTNkNy1SdXGg',
    'l8ooOxhcItowwLPuZn',
  ],
});
