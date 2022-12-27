import React from 'react';
import cx from 'classnames';
import { LeftSidebarItem } from './SidebarItem';
import { commentsService } from '@/_services';
import useRouter from '@/_hooks/use-router';

export const LeftSidebarComment = ({
  toggleComments,
  selectedSidebarItem,
  setSelectedSidebarItem,
  appVersionsId,
  currentPageId,
}) => {
  const [isActive, toggleActive] = React.useState(false);
  const [notifications, setNotifications] = React.useState([]);
  const router = useRouter();

  React.useEffect(() => {
    if (appVersionsId) {
      commentsService.getNotifications(router.query.id, false, appVersionsId, currentPageId).then(({ data }) => {
        setNotifications(data);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appVersionsId, currentPageId]);

  return (
    <LeftSidebarItem
      commentBadge={notifications?.length > 0}
      selectedSidebarItem={selectedSidebarItem}
      title={appVersionsId ? 'toggle comments' : 'Comments section will be available once you save this application'}
      icon={`comments`}
      className={cx(`left-sidebar-item left-sidebar-layout sidebar-comments`, {
        disabled: !appVersionsId,
        active: isActive,
      })}
      onClick={() => {
        setSelectedSidebarItem('comments');
        toggleActive(!isActive);
        toggleComments();
      }}
    />
  );
};
