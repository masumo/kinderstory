import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    list: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    minHeight: 188,
  },
  itemReverse: {
    flexDirection: 'row-reverse',
  },
  itemSection: {
    flex: 1,
    padding: 16,
  },
  itemReactionsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
    marginHorizontal: -8,
  },
  itemTitle: {
    flex: 1,
  },
  iconButton: {
    paddingHorizontal: 0,
  },
  authoringInfoContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
  activityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    maxHeight: 320,
  },
});