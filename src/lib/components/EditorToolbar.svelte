<script lang="ts">
	import {
		BlockFormatDropDown,
		UndoButton,
		RedoButton,
		Toolbar,
		Divider,
		ParagraphDropDownItem,
		HeadingDropDownItem,
		BulletDropDrownItem,
		NumberDropDrownItem,
		CheckDropDrownItem,
		QuoteDropDrownItem,
		CodeDropDrownItem,
		CodeLanguageDropDown,
		FontFamilyDropDown,
		// FontSizeDropDown,
		FontSizeEntry,
		BoldButton,
		ItalicButton,
		UnderlineButton,
		InsertLink,
		FormatCodeButton,
		InsertDropDown,
		DropDownAlign,
		InsertHRDropDownItem,
		InsertImageDropDownItem,
		MoreStylesDropDown,
		StrikethroughDropDownItem,
		SubscriptDropDownItem,
		SuperscriptDropDownItem,
		ClearFormattingDropDownItem,
		DropDownTextColorPicker,
		DropDownBackColorPicker,
		InsertColumnLayoutDropDownItem,
		InsertColumnsDialog,
		InsertTableDialog,
		InsertTableDropDownItem,
		ShortcutsPlugin,
		InsertYoutubeDialog,
		InsertYoutubeDropDownItem,
		InsertTweetDropDownItem,
		InsertTweetDialog,
		InsertBlueskyDialog,
		InsertBlueskyDropDownItem
	} from 'svelte-lexical';
	import InsertImageDialog from './InsertImageDialog.svelte';

	let imageDialog: InsertImageDialog;
	let columnsDialog: InsertColumnsDialog;
	let tableDialog: InsertTableDialog;
	let youtubeDialog: InsertYoutubeDialog;
	let tweetDialog: InsertTweetDialog;
	let blueskyDialog: InsertBlueskyDialog;
</script>

<Toolbar>
	{#snippet children({ editor, activeEditor, blockType })}
		<ShortcutsPlugin />
		<UndoButton />
		<RedoButton />
		<Divider />
		{#if activeEditor === editor}
			<BlockFormatDropDown>
				<ParagraphDropDownItem />
				<HeadingDropDownItem headingSize="h1" />
				<HeadingDropDownItem headingSize="h2" />
				<HeadingDropDownItem headingSize="h3" />
				<NumberDropDrownItem />
				<BulletDropDrownItem />
				<CheckDropDrownItem />
				<QuoteDropDrownItem />
				<CodeDropDrownItem />
			</BlockFormatDropDown>
			<Divider />
		{/if}
		{#if blockType === 'code'}
			<CodeLanguageDropDown />
		{:else}
			<FontFamilyDropDown />
			<!-- <FontSizeDropDown /> -->
			<FontSizeEntry />
			<Divider />
			<BoldButton />
			<ItalicButton />
			<UnderlineButton />
			<FormatCodeButton />
			<DropDownTextColorPicker />
			<DropDownBackColorPicker />
			<InsertLink />
			<MoreStylesDropDown>
				<StrikethroughDropDownItem />
				<SubscriptDropDownItem />
				<SuperscriptDropDownItem />
				<ClearFormattingDropDownItem />
			</MoreStylesDropDown>
			<Divider />
			{#if activeEditor === editor}
				<InsertDropDown>
					<InsertHRDropDownItem />
					<InsertImageDropDownItem onclick={() => imageDialog.open()} />
					<InsertColumnLayoutDropDownItem onclick={() => columnsDialog.open()} />
					<InsertTableDropDownItem onclick={() => tableDialog.open()} />
					<InsertYoutubeDropDownItem onclick={() => youtubeDialog.open()} />
				</InsertDropDown>
				<Divider />
			{/if}
		{/if}
		<DropDownAlign />
		<!-- dialogs -->
		<InsertImageDialog bind:this={imageDialog} />
		<InsertColumnsDialog bind:this={columnsDialog} />
		<InsertTableDialog bind:this={tableDialog} />
		<InsertYoutubeDialog bind:this={youtubeDialog} />
	{/snippet}
</Toolbar>

<style>
	/* globally select toolbar class */
	:global(.svelte-lexical .toolbar) {
		display: flex;
		flex-wrap: wrap;
		/* margin-bottom: 1px; */
		background: #fff;
		padding: 4px;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		border: #eee 1px solid;
		border-bottom-width: 0px;
		vertical-align: middle;
		overflow: auto;
		height: auto;
		position: sticky;
		top: 0;
		z-index: 2;
		overflow-y: hidden;
	}
</style>
