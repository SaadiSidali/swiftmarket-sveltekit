<script lang="ts">
	import {
		BoldButton,
		Divider,
		ItalicButton,
		UnderlineButton,
		StrikethroughButton,
		FormatCodeButton,
		DropDownAlign,
		FontFamilyDropDown,
		FontSizeDropDown,
		Toolbar
	} from 'svelte-lexical';
	import { Composer, ContentEditable, RichTextPlugin } from 'svelte-lexical';

	import { theme } from 'svelte-lexical/dist/themes/default';

	const initialConfig = {
		theme: theme,
		namespace: 'my_demo',
		nodes: [],
		onError: (error: Error) => {
			throw error;
		}
	};
</script>

<Composer {initialConfig}>
	<div class="editor-shell svelte-lexical">
		<Toolbar>
			{#snippet children({ editor, activeEditor, blockType })}
				<FontFamilyDropDown />
				<FontSizeDropDown />
				<Divider />
				<BoldButton />
				<ItalicButton />
				<UnderlineButton />
				<StrikethroughButton />
				<FormatCodeButton />
				<Divider />
				<DropDownAlign />
			{/snippet}
		</Toolbar>
		<div class="editor-container">
			<div class="editor-scroller">
				<div class="editor">
					<ContentEditable />
				</div>
			</div>
			<RichTextPlugin />
		</div>
	</div>
</Composer>
