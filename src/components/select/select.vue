<template>
    <div :class="classes" v-clickoutside="handleClose">
        <div :class="[prefixCls + '-selection']" @click="toggleMenu">
            <span :class="[prefixCls + '-placeholder']" v-show="showPlaceholder">请选择</span>
            <span :class="[prefixCls + '-selected-value']" v-show="!showPlaceholder && !multiple">{{ selectedLabel }}</span>
        </div>
        <transition>
            <div :class="[prefixCls + '-dropdown']" v-show="dropVisible">
                <ul :class="[prefixCls + '-dropdown-list']">
                    <slot></slot>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
import clickoutside from '../../directives/clickoutside';
import Emitter from '../../mixins/emitter';

const prefixCls = 'yl-select';

export default {
    name: 'ySelect',
    mixins: [Emitter],
    directives: { clickoutside },
    props: {
        value: {
            type: [String, Number],
            default: ''
        },
        multiple: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            prefixCls: prefixCls,
            options: [],
            optionInstances: [],
            visible: false,
            model: this.value,
            selectedLabel: ''
        };
    },
    computed: {
        classes() {
            return [
                `${prefixCls}`,
                {
                    [`${prefixCls}-visible`]: this.visible,
                    [`${prefixCls}-single`]: !this.multiple
                }
            ];
        },
        showPlaceholder() {
            let status = false;
            if ((typeof this.model) === 'string') {
                if (this.model === '') {
                    status = true;
                }
            } else if (this.model === null) {
                status = true;
            }
            return status;
        },
        dropVisible() {
            let status = true;
            const options = this.$slots.default || [];
            if (!options.length) {
                status = false;
            }
            return this.visible && status;
        }
    },
    methods: {
        toggleMenu() {
            if (this.disabled) {
                return false;
            }
            this.visible = !this.visible;
        },
        hideMenu() {
            this.visible = false;
        },
        handleClose() {
            this.hideMenu();
        },
        findChild(cb) {
            this.$children.forEach((child) => {
                cb(child);
            });
        },
        clearSelect() {
            this.findChild((child) => {
                child.selected = false;
            });
            this.model = '';
        },
        updateOptions(init) {
            let options = [];
            let index = 1;

            this.findChild((child) => {
                options.push({
                    value: child.value,
                    label: (child.label === undefined) ? child.$el.innerHTML : child.label
                });
                child.index = index++;

                if (init) {
                    this.optionInstances.push(child);
                }
            });

            this.options = options;
        }
    },
    mounted() {
        this.updateOptions(true);
        this.$on('on-select-selected', (value) => {
            if (this.model === value) {
                this.hideMenu();
            } else {
                this.clearSelect();
                this.model = value;
                this.hideMenu();
                for (let i = 0; i < this.options.length; i++) {
                    if (this.model === this.options[i].value) {
                        this.selectedLabel = this.options[i].label;
                        this.optionInstances[i].selected = true;
                        break;
                    }
                }
                /*eslint-disable no-console */
            }
        });
    }
};
</script>