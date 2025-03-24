<template>
  <template v-if="hasAccess">
    <component :is="wrappedComponent" v-if="wrappedComponent" v-bind="$attrs" />
    <slot v-else></slot>
  </template>
  
  <div v-else>{{ accessDeniedMessage }}</div>
</template>

<script setup>
import { computed } from 'vue';
import { checkPermissions, checkRoles } from './helperAccess';

const props = defineProps({
  requiredPermissions: {
    type: Array,
    default: () => [],
  },
  requiredRole: {
    type: String,
    default: '',
  },
  condition: {
    type: String,
    default: 'OR',
  },
  accessDeniedMessage: {
    type: String,
    default: 'شما مجوز لازم برای ورود به این بخش را ندارید',
  },
  wrappedComponent: {
    type: Object,
    default: null
  },
});

const hasAccess = computed(() => {
  let access = false;

  if (props.requiredPermissions.length && props.requiredRole) {
    const hasPermission = checkPermissions(props.requiredPermissions);
    const hasRole = checkRoles(props.requiredRole);
    access =
      props.condition === 'OR'
        ? [hasPermission, hasRole].some((item) => item)
        : [hasPermission, hasRole].every((item) => item);
  } else if (props.requiredPermissions.length === 0 && !props.requiredRole) {
    access = true;
  } else if (props.requiredPermissions?.length && !props.requiredRole) {
    access = checkPermissions(props.requiredPermissions);
  } else if (props.requiredPermissions.length === 0 && props.requiredRole) {
    access = checkRoles(props.requiredRole);
  }

  return access;
});
</script>