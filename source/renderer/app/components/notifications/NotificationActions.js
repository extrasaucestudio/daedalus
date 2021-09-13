// @flow
import React from 'react';
import classnames from 'classnames';
import { map } from 'lodash';
import { Button } from 'react-polymorph/lib/components/Button';
import { Link } from 'react-polymorph/lib/components/Link';
import { observer } from 'mobx-react';
import styles from './NotificationActions.scss';

export type NotificationActionItems = Array<NotificationActionItem>;

export type NotificationActionItem = {
  className?: ?string,
  label: string | Node,
  primary?: boolean,
  disabled?: boolean,
  onClick?: Function,
  onDisabled?: Function,
  isLink?: boolean,
  hasIconAfter?: boolean,
  hasIconBefore?: boolean,
  autoFocus?: boolean,
};

type Props = {
  actions: NotificationActionItems,
};

const NotificationActions = observer(({ actions }: Props) => {
  const componentStyles = classnames([styles.component]);
  return (
    <div className={componentStyles}>
      {map(
        actions,
        (
          {
            className,
            label,
            primary,
            disabled,
            onClick,
            isLink,
            hasIconAfter,
            hasIconBefore,
            autoFocus,
          },
          key
        ) => {
          const buttonClasses = classnames([
            styles.button,
            className,
            primary ? 'primary' : 'flat',
            primary ? styles.primaryButton : styles.secondaryButton,
          ]);
          const isAutoFocus = (primary && autoFocus) !== false || !!autoFocus;
          return !isLink ? (
            <Button
              key={key}
              className={buttonClasses}
              label={label}
              onClick={onClick}
              disabled={disabled}
              autoFocus={isAutoFocus}
            />
          ) : (
            <Link
              key={key}
              className={className}
              onClick={onClick}
              label={label}
              hasIconAfter={hasIconAfter}
              hasIconBefore={hasIconBefore}
            />
          );
        }
      )}
    </div>
  );
});

export default NotificationActions;
