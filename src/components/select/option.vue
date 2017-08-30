<template>
    <li :class="classes" @click.stop="select">
        <slot></slot>
    </li>
</template>
<script>
import Emitter from '../../mixins/emitter';

const prefixCls = 'yl-select-item';

export default {
    name: 'yOption',
    mixins: [Emitter],
    props: {
        value: {
            type: [String, Number],
            required: true
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            selected: false
        };
    },
    computed: {
        classes() {
            return [
                `${prefixCls}`,
                {
                    [`${prefixCls}-disabled`]: this.disabled,
                    [`${prefixCls}-selected`]: this.selected
                }
            ];
        }
    },
    methods: {
        select() {
            if (this.disabled) {
                return false;
            }

            this.dispatch('ySelect', 'on-select-selected', this.value);
        }
    }
};
</script>