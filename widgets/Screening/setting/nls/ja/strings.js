﻿///////////////////////////////////////////////////////////////////////////
// Copyright ï¿½ Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////
define({
  "units": {
    "areaSquareFeetUnit": "平方フィート",
    "areaAcresUnit": "エーカー",
    "areaSquareMetersUnit": "平方メートル",
    "areaSquareKilometersUnit": "平方キロメートル",
    "areaHectaresUnit": "ヘクタール",
    "areaSquareMilesUnit": "平方マイル",
    "lengthFeetUnit": "フィート",
    "lengthMilesUnit": "マイル",
    "lengthMetersUnit": "メートル",
    "lengthKilometersUnit": "キロメートル"
  },
  "analysisTab": {
    "analysisTabLabel": "解析",
    "selectAnalysisLayerLabel": "解析レイヤー",
    "addLayerLabel": "レイヤーの追加",
    "noValidLayersForAnalysis": "選択した Web マップに有効なレイヤーが見つかりませんでした。",
    "noValidFieldsForAnalysis": "選択した Web マップに有効なフィールドが見つかりませんでした。 選択したレイヤーを削除してください。",
    "allowGroupingLabel": "フィールドの同じ値でフィーチャをグループ化",
    "groupingHintDescription": "ヒント: デフォルトでは、選択したフィールドに同じ値を持つすべてのフィーチャはグループ化され、レポート内で 1 つのエントリとして表示されます。 like 属性によるグループ化を無効にすると、代わりにフィーチャごとにエントリが表示されます。",
    "addLayersHintText": "ヒント: 解析とレポートに含めるレイヤーとフィールドを選択します",
    "queryCapabilityHintText": "クエリ機能があるレイヤーだけが一覧表示されます。",
    "addLayerNameTitle": "レイヤー名",
    "addFieldsLabel": "フィールドの追加",
    "addFieldsPopupTitle": "フィールド選択",
    "addFieldsNameTitle": "フィールド名",
    "aoiToolsLegendLabel": "対象地域ツール",
    "aoiToolsDescriptionLabel": "対象地域の作成に使用できるツールを選択してラベルを付けます。",
    "placenameLabel": "地名",
    "drawToolsLabel": "描画ツールの選択",
    "uploadShapeFileLabel": "シェープファイルのアップロード",
    "coordinatesLabel": "座標",
    "coordinatesDrpDwnHintText": "ヒント: 入力されたトラバースを表示する単位を選択します",
    "coordinatesBearingDrpDwnHintText": "ヒント: 入力されたトラバースを表示する方位を選択します",
    "allowShapefilesUploadLabel": "ユーザーが解析に含めるシェープファイルをアップロードできるようにします",
    "allowShapefilesUploadLabelHintText": "ヒント: ユーザーが解析レポートに含めるシェープファイルとして独自のデータをアップロードできるように [レポート] タブにオプションを追加します",
    "allowVisibleLayerAnalysisLabel": "表示されないレイヤーは解析または結果の報告をしない",
    "allowVisibleLayerAnalysisHintText": "ヒント: 非表示のレイヤーや縮尺の表示設定のために表示されないレイヤーは、解析されず、印刷またはダウンロードされる結果に含まれません。",
    "areaUnitsLabel": "解析結果の単位 (面積)",
    "lengthUnitsLabel": "解析結果の単位 (長さ)",
    "maxFeatureForAnalysisLabel": "解析するフィーチャの最大数",
    "maxFeatureForAnalysisHintText": "ヒント: 解析に含めるフィーチャの最大数を設定します",
    "searchToleranceLabelText": "検索許容値",
    "searchToleranceHint": "ヒント: 検索許容値は、ポイントおよびライン入力を解析する場合に使用されます",
    "placenameButtonText": "地名",
    "drawToolsButtonText": "描画",
    "shapefileButtonText": "シェープファイル",
    "coordinatesButtonText": "座標",
    "invalidLayerErrorMsg": "フィールドを構成してください",
    "drawToolSelectableLayersLabel": "選択可能なレイヤーの選択",
    "drawToolSelectableLayersHint": "ヒント: [描画ツールを選択] を使用して選択できるフィーチャを含むレイヤーを選択します",
    "drawToolsSettingsFieldsetLabel": "描画ツール",
    "drawToolPointLabel": "ポイント",
    "drawToolPolylineLabel": "ポリライン",
    "drawToolExtentLabel": "範囲",
    "drawToolPolygonLabel": "ポリゴン",
    "drawToolCircleLabel": "円",
    "selectDrawToolsText": "対象地域の作成に使用できる描画ツールを選択します",
    "selectingDrawToolErrorMessage": "描画ツールまたは選択レイヤーを少なくとも 1 つ選択して、AOI ツールの [図形描画ツール] オプションを使用します。",
    "sortingSettingsLegend": "並べ替え設定",
    "ascendingLabel": "昇順",
    "descendingLabel": "降順",
    "sortFieldSelectLabel": "並べ替えフィールドを選択",
    "statisticsCountLabel": "統計: カウント",
    "statisticsTotalLengthLabel": "統計: 全長",
    "statisticsTotalAreaLabel": "統計: 合計面積"
  },
  "downloadTab": {
    "downloadLegend": "ダウンロード設定",
    "reportLegend": "レポート設定",
    "downloadTabLabel": "ダウンロード",
    "syncEnableOptionLabel": "フィーチャ レイヤー",
    "syncEnableOptionHint": "ヒント: ダウンロードできるレイヤーを選択し、各レイヤーが使用できる形式を指定します。 ダウンロードしたデータセットは、対象地域と交差するフィーチャを含みます。",
    "syncEnableOptionNote": "注意: ファイル ジオデータベースとシェープファイルのダウンロードには、同期が有効なレイヤーが必要です。 シェープファイルの形式は、ArcGIS Online のホスト フィーチャ レイヤーでのみサポートされています。",
    "extractDataTaskOptionLabel": "[データの抽出タスク (Extract Data Task)] ジオプロセシング サービス",
    "extractDataTaskOptionHint": "ヒント: 公開されている [データの抽出タスク (Extract Data Task)] ジオプロセシング サービスを使用して、対象地域と交差するフィーチャを、ファイル ジオデータベースまたはシェープファイルの形式でダウンロードします。",
    "cannotDownloadOptionLabel": "ダウンロードの無効化",
    "syncEnableTableHeaderTitle": {
      "layerNameLabel": "レイヤー名",
      "csvFileFormatLabel": "CSV",
      "fileGDBFormatLabel": "ファイル ジオデータベース",
      "ShapefileFormatLabel": "シェープファイル",
      "allowDownloadLabel": "ダウンロードの許可"
    },
    "setButtonLabel": "設定",
    "GPTaskLabel": "ジオプロセシング サービスの URL を指定します",
    "printGPServiceLabel": "印刷サービスの URL",
    "setGPTaskTitle": "必要なジオプロセシング サービスの URL を指定します",
    "logoLabel": "ロゴ",
    "logoChooserHint": "ヒント: 画像アイコンをクリックして、レポートの左上隅に表示されるロゴを変更します",
    "footnoteLabel": "脚注",
    "columnTitleColorPickerLabel": "レポート列のタイトル色",
    "reportTitleLabel": "レポート タイトル",
    "displaySummaryLabel": "サマリーの表示",
    "hideZeroValueRowLabel": "すべての解析フィールドで値が 0 の行を非表示",
    "hideNullValueRowLabel": "すべての解析フィールドでデータ値が存在しない (NULL または空) の行を非表示",
    "errorMessages": {
      "invalidGPTaskURL": "無効なジオプロセシング サービスです。 [データの抽出タスク (Extract Data Task)] を含むジオプロセシング サービスを選択してください。",
      "noExtractDataTaskURL": "[データの抽出タスク (Extract Data Task)] を含むジオプロセシング サービスを選択してください。",
      "duplicateCustomOption": "${duplicateValueSizeName} に対する重複エントリが存在します。",
      "invalidLayoutWidth": "${customLayoutOptionValue} に対して無効な幅が入力されました。",
      "invalidLayoutHeight": "${customLayoutOptionValue} に対して無効な高さが入力されました。",
      "invalidLayoutPageUnits": "${customLayoutOptionValue} に対して無効なページ単位が選択されました。",
      "failtofetchbuddyTaskDimension": "連動タスクのディメンション情報の取得中にエラーが発生しました。もう一度試してください。",
      "failtofetchbuddyTaskName": "連動タスク名の取得中にエラーが発生しました。もう一度試してください。",
      "failtofetchChoiceList": "印刷サービスから選択リストの取得中にエラーが発生しました。もう一度試してください。",
      "invalidWidth": "無効な幅です。",
      "invalidHeight": "無効な高さです。"
    },
    "addCustomLayoutTitle": "カスタム レイアウトの追加",
    "customLayoutOptionHint": "ヒント: 印刷サービスから印刷オプションのリストにレイアウトを追加します。",
    "reportDefaultOptionLabel": "デフォルトのレイアウト",
    "pageSizeUnits": {
      "millimeters": "ミリメートル",
      "points": "ポイント"
    },
    "noDataTextRepresentation": "データ値がありません",
    "naTextRepresentation": "適用外の値",
    "noDataDefaultText": "データなし",
    "notApplicableDefaultText": "N/A"
  },
  "generalTab": {
    "generalTabLabel": "一般",
    "tabLabelsLegend": "パーセル ラベル",
    "tabLabelsHint": "ヒント: ラベルの指定",
    "AOITabLabel": "対象地域パネル",
    "ReportTabLabel": "レポート パネル",
    "bufferSettingsLegend": "バッファー設定",
    "defaultBufferDistanceLabel": "デフォルトのバッファー距離",
    "defaultBufferUnitsLabel": "バッファー単位",
    "generalBufferSymbologyHint": "ヒント: 定義された対象地域の周囲にバッファー エリアを示すために使用されるシンボル",
    "aoiGraphicsSymbologyLegend": "対象地域シンボル",
    "aoiGraphicsSymbologyHint": "ヒント: ポイント、ライン、ポリゴンの対象地域を示すために使用されるシンボル",
    "pointSymbologyLabel": "ポイント",
    "previewLabel": "プレビュー",
    "lineSymbologyLabel": "ライン",
    "polygonSymbologyLabel": "ポリゴン",
    "aoiBufferSymbologyLabel": "バッファー シンボル",
    "pointSymbolChooserPopupTitle": "住所またはポイント位置のシンボル",
    "polygonSymbolChooserPopupTitle": "ポリゴン シンボル",
    "lineSymbolChooserPopupTitle": "ライン シンボル",
    "aoiSymbolChooserPopupTitle": "バッファー シンボル",
    "aoiTabText": "AOI",
    "reportTabText": "レポート",
    "invalidSymbolValue": "シンボル値が無効です。"
  },
  "searchSourceSetting": {
    "searchSourceSettingTabTitle": "検索ソースの設定",
    "searchSourceSettingTitle": "検索ソースの設定",
    "searchSourceSettingTitleHintText": "ジオコード サービスまたはフィーチャ レイヤーを検索ソースとして追加および構成します。指定されたこれらのソースは、検索ボックス内で検索可能な対象を決定します。",
    "addSearchSourceLabel": "検索ソースの追加",
    "featureLayerLabel": "フィーチャ レイヤー",
    "geocoderLabel": "ジオコーダー",
    "generalSettingLabel": "一般設定",
    "allPlaceholderLabel": "標準のプレースホルダー テキスト:",
    "allPlaceholderHintText": "ヒント: すべてのレイヤーとジオコーダーを検索するときに、プレースホルダーとして表示されるテキストを入力します",
    "generalSettingCheckboxLabel": "検出されたフィーチャまたは位置のポップアップを表示",
    "countryCode": "国コードまたは地域コード",
    "countryCodeEg": "例: ",
    "countryCodeHint": "この値を空白のままにすると、すべての国および地域を検索します",
    "questionMark": "？",
    "searchInCurrentMapExtent": "現在のマップ範囲内のみを検索",
    "locatorUrl": "ジオコーダーの URL",
    "locatorName": "ジオコーダー名",
    "locatorExample": "例",
    "locatorWarning": "このジオコーディング サービスのバージョンはサポートされていません。ウィジェットは、10.0 以上のジオコーディング サービスをサポートしています。",
    "locatorTips": "ジオコーディング サービスがヒント機能をサポートしていないため、ヒントは使用できません。",
    "layerSource": "レイヤー ソース",
    "setLayerSource": "レイヤー ソースの設定",
    "setGeocoderURL": "ジオコーダーの URL の設定",
    "searchLayerTips": "フィーチャ サービスがページネーション機能をサポートしていないため、ヒントは使用できません。",
    "placeholder": "プレースホルダー テキスト",
    "searchFields": "検索フィールド",
    "displayField": "表示フィールド",
    "exactMatch": "完全一致",
    "maxSuggestions": "最大候補数",
    "maxResults": "結果の最大数",
    "enableLocalSearch": "ローカル検索の有効化",
    "minScale": "最小縮尺",
    "minScaleHint": "マップ縮尺がこの縮尺より大きい場合は、ローカル検索が適用されます。",
    "radius": "半径",
    "radiusHint": "現在のマップの中心を起点としたエリアの半径を指定します。この半径は、検索位置に最も近い候補が最初に返されるようにジオコーディング候補のランクを高めるために使用されます。",
    "setSearchFields": "検索フィールドの設定",
    "set": "設定",
    "invalidUrlTip": "URL ${URL} は無効であるか、アクセスできません。",
    "invalidSearchSources": "検索ソースの設定が無効です"
  },
  "errorMsg": {
    "textboxFieldsEmptyErrorMsg": "必須フィールドの記入を完了してください",
    "bufferDistanceFieldsErrorMsg": "有効な値を入力してください",
    "invalidSearchToleranceErrorMsg": "検索許容値の有効な値を入力してください。",
    "atLeastOneCheckboxCheckedErrorMsg": "無効な構成: 少なくとも 1 つの対象地域ツールが必要です。",
    "noLayerAvailableErrorMsg": "利用可能なレイヤーがありません",
    "layerNotSupportedErrorMsg": "サポートされていません ",
    "noFieldSelected": "解析用のフィールドを選択するには、編集アクションを使用してください。",
    "duplicateFieldsLabels": "\"${itemNames}\" に追加された重複ラベル \"${labelText}\"",
    "noLayerSelected": "解析用のレイヤーを少なくとも 1 つ選択してください。",
    "errorInSelectingLayer": "レイヤーを選択できません。 もう一度お試しください。",
    "errorInMaxFeatureCount": "解析用の有効な最大フィーチャ数を入力してください。"
  }
});