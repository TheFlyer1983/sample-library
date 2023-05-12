<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    variant?: string;
    classes?: string;
    size?: string;
    rounded?: boolean;
  }>(),
  {
    variant: 'primary',
    classes: '',
    size: '',
    rounded: true,
  }
);

defineEmits<{
  (e: 'click'): void;
}>();

const styles = computed(() => {
  let string = '';

  if (props.size === 'x-small') {
    string += ' text-xs px-2 py-1';
  } else if (props.size === 'small') {
    string += ' text-sm px-4 py-2';
  } else if (props.size === 'no-padding') {
    string += ' px-0 py-0';
  } else {
    string += ' py-3 px-6';
  }

  if (props.variant === 'primary') {
    string += ' font-bold bg-gradient-to-br text-white from-p-pink to-p-yellow hover:bg-gradient-to-b';
  }

  if (props.variant === 'save') {
    string += ' font-bold bg-gradient-to-br text-white from-p-pink to-p-yellow hover:bg-gradient-to-b';
  }

  if (props.variant === 'secondary') {
    string += ' font-bold bg-p-gray-light text-p-gray';
  }

  if (props.variant === 'create') {
    string += ' font-bold bg-gradient-to-br text-white from-p-navy-light to-p-navy-dark hover:bg-gradient-to-b';
  }

  if (props.variant === 'blue') {
    string += ' font-bold bg-gradient-to-br text-white from-p-navy-light to-p-navy-dark hover:bg-gradient-to-b';
  }

  if (props.variant === 'gray') {
    string +=
      ' font-bold bg-gradient-to-b border border-p-gray-6 text-p-navy from-white to-p-gray-8 hover:bg-gradient-to-t';
  }

  if (props.variant === 'link') {
    string +=
      ' font-bold bg-gradient-to-b border border-p-gray-6 text-p-navy from-white to-p-gray-8 hover:bg-gradient-to-t';
  }

  if (props.variant === 'action') {
    string += ' font-bold border border-p-gray-6 text-p-navy bg-p-gray-8';
  }

  if (props.variant === 'blue_outline') {
    string += ' font-bold border-2 border-p-navy text-p-navy bg-white font-bold';
  }

  if (props.variant === 'cool_blue') {
    string += ' font-bold bg-gradient-to-br text-white from-p-aqua-light to-p-green hover:bg-gradient-to-b';
  }

  if (props.variant === 'send') {
    string += ' font-bold bg-gradient-to-br text-white from-p-aqua-light to-p-green hover:bg-gradient-to-b';
  }

  if (props.variant === 'outline') {
    string +=
      ' font-bold inline-flex justify-center border border-gray-300 shadow-sm bg-white font-medium text-gray-700 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-p-pink';
  }

  if (props.variant === 'cancel') {
    string +=
      ' font-bold inline-flex justify-center border border-gray-300 shadow-sm bg-white font-medium text-gray-700 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-p-pink';
  }

  if (props.rounded === true) {
    string += ' rounded-lg';
  }

  if (props.classes) {
    string += ' ' + props.classes;
  }

  return string;
});
</script>

<template>
  <button :class="styles" @click="$emit('click')">
    <slot />
  </button>
</template>
