var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = LZOTools","category":"page"},{"location":"#LZOTools","page":"Home","title":"LZOTools","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for LZOTools.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [LZOTools]","category":"page"},{"location":"#LZOTools.AbstractLZOAlgorithm","page":"Home","title":"LZOTools.AbstractLZOAlgorithm","text":"AbstractLZOAlgorithm\n\nAn abstract type from which specific LZO compression and decompression algorithms inherit.\n\n\n\n\n\n","category":"type"},{"location":"#LZOTools.LZO1","page":"Home","title":"LZOTools.LZO1","text":"LZO1\n\nThe LZO1 algorithm.\n\nKeyword arguments\n\nworking_memory::Vector{UInt8} = zeros(UInt8, LZO1_WORKING_MEMORY_SIZE): a block of memory used for historical lookups.\n\n\n\n\n\n","category":"type"},{"location":"#LZOTools.LZO1A","page":"Home","title":"LZOTools.LZO1A","text":"LZO1A\n\nThe LZO1A algorithm.\n\nKeyword arguments\n\nworking_memory::Vector{UInt8} = zeros(UInt8, LZO1A_WORKING_MEMORY_SIZE): a block of memory used for historical lookups.\n\n\n\n\n\n","category":"type"},{"location":"#LZOTools.LZO1A_99","page":"Home","title":"LZOTools.LZO1A_99","text":"LZO1A_99\n\nThe LZO1A_99 algorithm.\n\nKeyword arguments\n\nworking_memory::Vector{UInt8} = zeros(UInt8, LZO1A_99_WORKING_MEMORY_SIZE): a block of memory used for historical lookups.\n\n\n\n\n\n","category":"type"},{"location":"#LZOTools.LZO1B","page":"Home","title":"LZOTools.LZO1B","text":"LZO1B\n\nThe LZO1B algorithm.\n\nKeyword arguments\n\ncompression_level::Int = -1: compression level 1-9, with 9 producing the maximum compression ratio and 1 running the fastest, and where -1 chooses the default (1).\nworking_memory::Vector{UInt8} = zeros(UInt8, LZO1B_WORKING_MEMORY_SIZE): a block of memory used for historical lookups.\n\n\n\n\n\n","category":"type"},{"location":"#LZOTools.LZO1B_99","page":"Home","title":"LZOTools.LZO1B_99","text":"LZO1B_99\n\nThe LZO1B_99 algorithm.\n\nKeyword arguments\n\nworking_memory::Vector{UInt8} = zeros(UInt8, LZO1B_99_WORKING_MEMORY_SIZE): a block of memory used for historical lookups.\n\n\n\n\n\n","category":"type"},{"location":"#LZOTools.LZO1C","page":"Home","title":"LZOTools.LZO1C","text":"LZO1C\n\nThe LZO1C algorithm.\n\nKeyword arguments\n\ncompression_level::Int = -1: compression level 1-9, with 9 producing the maximum compression ratio and 1 running the fastest, and where -1 chooses the default (1).\nworking_memory::Vector{UInt8} = zeros(UInt8, LZO1C_WORKING_MEMORY_SIZE): a block of memory used for historical lookups.\n\n\n\n\n\n","category":"type"},{"location":"#LZOTools.LZO1C_99","page":"Home","title":"LZOTools.LZO1C_99","text":"LZO1C_99\n\nThe LZO1C_99 algorithm.\n\nKeyword arguments\n\nworking_memory::Vector{UInt8} = zeros(UInt8, LZO1C_99_WORKING_MEMORY_SIZE): a block of memory used for historical lookups.\n\n\n\n\n\n","category":"type"},{"location":"#LZOTools.LZO1C_999","page":"Home","title":"LZOTools.LZO1C_999","text":"LZO1C_999\n\nThe LZO1C_999 algorithm.\n\nKeyword arguments\n\nworking_memory::Vector{UInt8} = zeros(UInt8, LZO1C_999_WORKING_MEMORY_SIZE): a block of memory used for historical lookups.\n\n\n\n\n\n","category":"type"},{"location":"#LZOTools.LZO1F_1","page":"Home","title":"LZOTools.LZO1F_1","text":"LZO1F_1\n\nThe LZO1F_1 algorithm.\n\nKeyword arguments\n\nworking_memory::Vector{UInt8} = zeros(UInt8, LZO1F_1_WORKING_MEMORY_SIZE): a block of memory used for historical lookups.\n\n\n\n\n\n","category":"type"},{"location":"#LZOTools.LZO1F_999","page":"Home","title":"LZOTools.LZO1F_999","text":"LZO1F_999\n\nThe LZO1F_999 algorithm.\n\nKeyword arguments\n\nworking_memory::Vector{UInt8} = zeros(UInt8, LZO1F_999_WORKING_MEMORY_SIZE): a block of memory used for historical lookups.\n\n\n\n\n\n","category":"type"},{"location":"#LZOTools.LZO1X_1","page":"Home","title":"LZOTools.LZO1X_1","text":"LZO1X_1\n\nThe LZO1X_1 algorithm.\n\nKeyword arguments\n\nworking_memory::Vector{UInt8} = zeros(UInt8, LZO1X_1_WORKING_MEMORY_SIZE): a block of memory used for historical lookups.\n\n\n\n\n\n","category":"type"},{"location":"#LZOTools.LZO1X_1_11","page":"Home","title":"LZOTools.LZO1X_1_11","text":"LZO1X_1_11\n\nThe LZO1X111 algorithm.\n\nKeyword arguments\n\nworking_memory::Vector{UInt8} = zeros(UInt8, LZO1X_1_11_WORKING_MEMORY_SIZE): a block of memory used for historical lookups.\n\n\n\n\n\n","category":"type"},{"location":"#LZOTools.LZO1X_1_12","page":"Home","title":"LZOTools.LZO1X_1_12","text":"LZO1X_1_12\n\nThe LZO1X112 algorithm.\n\nKeyword arguments\n\nworking_memory::Vector{UInt8} = zeros(UInt8, LZO1X_1_12_WORKING_MEMORY_SIZE): a block of memory used for historical lookups.\n\n\n\n\n\n","category":"type"},{"location":"#LZOTools.LZO1X_1_15","page":"Home","title":"LZOTools.LZO1X_1_15","text":"LZO1X_1_15\n\nThe LZO1X115 algorithm.\n\nKeyword arguments\n\nworking_memory::Vector{UInt8} = zeros(UInt8, LZO1X_1_15_WORKING_MEMORY_SIZE): a block of memory used for historical lookups.\n\n\n\n\n\n","category":"type"},{"location":"#LZOTools.LZO1X_999","page":"Home","title":"LZOTools.LZO1X_999","text":"LZO1X_999\n\nThe LZO1X_999 algorithm.\n\nKeyword arguments\n\ncompression_level::Int = 8: compression level 1-8, with 8 producing the maximum compression ratio and 1 running the fastest.\nworking_memory::Vector{UInt8} = zeros(UInt8, LZO1X_999_WORKING_MEMORY_SIZE): a block of memory used for historical lookups.\n\n\n\n\n\n","category":"type"},{"location":"#LZOTools.LZO1Y_1","page":"Home","title":"LZOTools.LZO1Y_1","text":"LZO1Y_1\n\nThe LZO1Y_1 algorithm.\n\nKeyword arguments\n\nworking_memory::Vector{UInt8} = zeros(UInt8, LZO1Y_1_WORKING_MEMORY_SIZE): a block of memory used for historical lookups.\n\n\n\n\n\n","category":"type"},{"location":"#LZOTools.LZO1Y_999","page":"Home","title":"LZOTools.LZO1Y_999","text":"LZO1Y_999\n\nThe LZO1Y_999 algorithm.\n\nKeyword arguments\n\ncompression_level::Int = 8: compression level 1-8, with 8 producing the maximum compression ratio and 1 running the fastest.\nworking_memory::Vector{UInt8} = zeros(UInt8, LZO1Y_999_WORKING_MEMORY_SIZE): a block of memory used for historical lookups.\n\n\n\n\n\n","category":"type"},{"location":"#LZOTools.LZO1Z_999","page":"Home","title":"LZOTools.LZO1Z_999","text":"LZO1Z_999\n\nThe LZO1Z_999 algorithm.\n\nKeyword arguments\n\ncompression_level::Int = 8: compression level 1-8, with 8 producing the maximum compression ratio and 1 running the fastest.\nworking_memory::Vector{UInt8} = zeros(UInt8, LZO1Z_999_WORKING_MEMORY_SIZE): a block of memory used for historical lookups.\n\n\n\n\n\n","category":"type"},{"location":"#LZOTools.LZO1_99","page":"Home","title":"LZOTools.LZO1_99","text":"LZO1_99\n\nThe LZO1_99 algorithm.\n\nKeyword arguments\n\nworking_memory::Vector{UInt8} = zeros(UInt8, LZO1_99_WORKING_MEMORY_SIZE): a block of memory used for historical lookups.\n\n\n\n\n\n","category":"type"},{"location":"#LZOTools.LZO2A_999","page":"Home","title":"LZOTools.LZO2A_999","text":"LZO2A_999\n\nThe LZO2A_999 algorithm.\n\nKeyword arguments\n\nworking_memory::Vector{UInt8} = zeros(UInt8, LZO2A_999_WORKING_MEMORY_SIZE): a block of memory used for historical lookups.\n\n\n\n\n\n","category":"type"},{"location":"#LZOTools.compress-Tuple{AbstractLZOAlgorithm, AbstractVector{UInt8}}","page":"Home","title":"LZOTools.compress","text":"compress([algorithm], src::AbstractVector{UInt8}; [kwargs...])::Vector{UInt8}\n\nCompress src using LZO algorithm algorithm.\n\nReturns a Vector{UInt8} loaded with the compressed version of src.\n\nThe algorithm argument, if given, can be an instance of an AbstractLZOAlgorithm, a Type{<:AbstractLZOAlgorithm}, or a Symbol or String that names an LZO algorithm. The supported compression algorithm types are listed below–the symbol and string versions are the same, case-sensitive characters as the type name:\n\nLZO1X_1, :LZO1X_1, or \"LZO1X_1\" (also LZO1X or LZO, and is the default if no algorithm is given)\nLZO1, etc.\nLZO1_99\nLZO1A\nLZO1A_99\nLZO1B_1 (also LZO1B)\nLZO1B_2\nLZO1B_3\nLZO1B_4\nLZO1B_5\nLZO1B_6\nLZO1B_7\nLZO1B_8\nLZO1B_9\nLZO1B_99\nLZO1B_999\nLZO1C_1 (also LZO1C)\nLZO1C_2\nLZO1C_3\nLZO1C_4\nLZO1C_5\nLZO1C_6\nLZO1C_7\nLZO1C_8\nLZO1C_9\nLZO1C_99\nLZO1C_999\nLZO1F_1 (also LZO1F)\nLZO1F_999\nLZO1X_1_11\nLZO1X_1_12\nLZO1X_1_15\nLZO1X_999\nLZO1Y_1 (also LZO1Y)\nLZO1Y_999\nLZO1Z_999\nLZO2A_999\n\nKeyword arguments kwargs, if given, are passed to the algorithm struct constructors. See the documentation for the specific algorithm type for more information about valid keyword arguments and defaults.\n\n\n\n\n\n","category":"method"},{"location":"#LZOTools.decompress-Tuple{AbstractLZOAlgorithm, AbstractVector{UInt8}}","page":"Home","title":"LZOTools.decompress","text":"decompress([algorithm], src::AbstractVector{UInt8}; [kwargs...])::Vector{UInt8}\n\nDecompress src using LZO algorithm algorithm. Only available for algorithms with safe decompression functions defined.\n\nReturns a Vector{UInt8} loaded with the decompressed version of src.\n\nThe algorithm argument, if given, can be an instance of an AbstractLZOAlgorithm, a Type{<:AbstractLZOAlgorithm}, or a Symbol or String that names an LZO algorithm. The supported decompression algorithm types are listed below–the symbol and string versions are the same, case-sensitive characters as the type name:\n\nLZO1X_1, :LZO1X_1, or \"LZO1X_1\" (also LZO1X, LZO, LZO1X_1_11, LZO1X_1_12, LZO1X_1_15, or LZO1X_999, and is the default if no algorithm is given)\nLZO1B_1 (also LZO1B, LZO1B_2, LZO1B_3, LZO1B_4, LZO1B_5, LZO1B_6, LZO1B_7, LZO1B_8, LZO1B_9, LZO1B_99, or LZO1B_999)\nLZO1C_1 (also LZO1C, LZO1C_2, LZO1C_3, LZO1C_4, LZO1C_5, LZO1C_6, LZO1C_7, LZO1C_8, LZO1C_9, LZO1C_99, or LZO1C_999)\nLZO1F_1 (also LZO1F or LZO1F_999)\nLZO1Y_1 (also LZO1Y or LZO1Y_999)\nLZO1Z_999\nLZO2A_999\n\nKeyword arguments kwargs, if given, are passed to the algorithm struct constructors. See the documentation for the specific algorithm type for more information about valid keyword arguments and defaults.\n\n\n\n\n\n","category":"method"},{"location":"#LZOTools.max_compressed_length-Tuple{AbstractLZOAlgorithm, Integer}","page":"Home","title":"LZOTools.max_compressed_length","text":"max_compressed_length(algo, n)::Int\n\nCompute the maximum length that will result from compressing n bytes using LZO algorithm algo.\n\nThe worst-case scenario is a single super-long literal, in which case the input has to be emitted in its entirety (n bytes) plus the appropriate commands to start a long literal (n/255 bytes + a constant depending on n) plus the end of stream command (3 bytes). However, the liblzo2 authors suggest the following formula for most algorithms.\n\n\n\n\n\n","category":"method"},{"location":"#LZOTools.optimize!-Tuple{AbstractLZOAlgorithm, AbstractVector{UInt8}}","page":"Home","title":"LZOTools.optimize!","text":"optimize!([algorithm], src::AbstractVector{UInt8}; [kwargs...])::Vector{UInt8}\n\nOptimize the already compressed src in-place using LZO algorithm algorithm, returning the resized and optimized src.\n\nThe algorithm argument, if given, can be an instance of an AbstractLZOAlgorithm, a Type{<:AbstractLZOAlgorithm}, or a Symbol or String that names an LZO algorithm. The supported compression algorithm types are listed below–the symbol and string versions are the same, case-sensitive characters as the type name:\n\nLZO1X_1, :LZO1X_1, or \"LZO1X_1\" (also LZO1X or LZO, and is the default if no algorithm is given)\nLZO1X_1_11\nLZO1X_1_12\nLZO1X_1_15\nLZO1X_999\nLZO1Y_1 (also LZO1Y)\nLZO1Y_999\n\n!!! warn Match the compression algorithm with the optimization algorithm     Undefined behavior occurs if the algorithm passed to optimize does not match the algorithm passed to compress when src was generated.\n\nKeyword arguments kwargs, if given, are passed to the algorithm struct constructors. See the documentation for the specific algorithm type for more information about valid keyword arguments and defaults.\n\nnote: Note\nOptimizing compressed data involves splitting \"long\" literal copy commands into one \"short\" and one \"long\" run, then embedding the \"short\" literal copy into the the previous history copy command, thereby saving up to two bytes from each \"long\" literal copy command. The particular circumstances under which this optimization can occur happens in only about 1% of literal copy commands and can save at most about 1% of that command's total length, so optimization is only recommended when a 0.01% improvement in compression ratio is absolutely necessary. Also note that any increase in compression ratio achieved through optimization marginally increases the processing time required to decompress the data.\n\n\n\n\n\n","category":"method"},{"location":"#LZOTools.unsafe_compress!-Tuple{AbstractLZOAlgorithm, AbstractVector{UInt8}, AbstractVector{UInt8}}","page":"Home","title":"LZOTools.unsafe_compress!","text":"unsafe_compress!([algorithm], dest, src; [kwargs...])::Int\n\nCompress src to dest using LZO algorithm algorithm, returning the number of bytes loaded into dest.\n\nThe method is \"unsafe\" in that it does not check to see if the compressed output can fit into dest before proceeding, and may write out of bounds or crash your program if the number of bytes required to compress src is larger than the number of bytes available in dest. The method returns the number of bytes written to dest, which may be greater than length(dest).\n\nBoth dest and src must have pointer and length methods defined, and the memory of dest has to be writable or else undefined behavior will occur.\n\nThe algorithm argument, if given, can be an instance of an AbstractLZOAlgorithm, a Type{<:AbstractLZOAlgorithm}, or a Symbol or String that names an LZO algorithm. The supported compression algorithm types are listed below–the symbol and string versions are the same, case-sensitive characters as the type name:\n\nLZO1X_1, :LZO1X_1, or \"LZO1X_1\" (also LZO1X or LZO, and is the default if no algorithm is given)\nLZO1, etc.\nLZO1_99\nLZO1A\nLZO1A_99\nLZO1B_1 (also LZO1B)\nLZO1B_2\nLZO1B_3\nLZO1B_4\nLZO1B_5\nLZO1B_6\nLZO1B_7\nLZO1B_8\nLZO1B_9\nLZO1B_99\nLZO1B_999\nLZO1C_1 (also LZO1C)\nLZO1C_2\nLZO1C_3\nLZO1C_4\nLZO1C_5\nLZO1C_6\nLZO1C_7\nLZO1C_8\nLZO1C_9\nLZO1C_99\nLZO1C_999\nLZO1F_1 (also LZO1F)\nLZO1F_999\nLZO1X_1_11\nLZO1X_1_12\nLZO1X_1_15\nLZO1X_999\nLZO1Y_1 (also LZO1Y)\nLZO1Y_999\nLZO1Z_999\nLZO2A_999\n\nKeyword arguments kwargs, if given, are passed to the algorithm struct constructors. See the documentation for the specific algorithm type for more information about valid keyword arguments and defaults.\n\n\n\n\n\n","category":"method"},{"location":"#LZOTools.unsafe_decompress!-Tuple{AbstractLZOAlgorithm, Any, Any}","page":"Home","title":"LZOTools.unsafe_decompress!","text":"unsafe_decompress!([algorithm], dest, src; [kwargs...])::Int\n\nDecompress src to dest using LZO algorithm algorithm, returning the number of bytes loaded into dest.\n\nThe method is \"unsafe\" in that it does not check to see if the decompressed output can fit into dest before proceeding, and may write out of bounds or crash your program if the number of bytes required to decompress src is larger than the number of bytes available in dest. The method returns the number of bytes written to dest, which may be greater than length(dest).\n\nBoth dest and src have to have pointer and length methods defined, and the memory of dest has to be writable or else undefined behavior will occur.\n\nThe algorithm argument, if given, can be an instance of an AbstractLZOAlgorithm, a Type{<:AbstractLZOAlgorithm}, or a Symbol or String that names an LZO algorithm. The supported decompression algorithm types are listed below–the symbol and string versions are the same, case-sensitive characters as the type name:\n\nLZO1X_1, :LZO1X_1, or \"LZO1X_1\" (also LZO1X, LZO, LZO1X_1_11, LZO1X_1_12, LZO1X_1_15, or LZO1X_999, and is the default if no algorithm is given)\nLZO1 (also LZO1_99)\nLZO1A (also LZO1A_99)\nLZO1B_1 (also LZO1B, LZO1B_2, LZO1B_3, LZO1B_4, LZO1B_5, LZO1B_6, LZO1B_7, LZO1B_8, LZO1B_9, LZO1B_99, or LZO1B_999)\nLZO1C_1 (also LZO1C, LZO1C_2, LZO1C_3, LZO1C_4, LZO1C_5, LZO1C_6, LZO1C_7, LZO1C_8, LZO1C_9, LZO1C_99, or LZO1C_999)\nLZO1F_1 (also LZO1F or LZO1F_999)\nLZO1Y_1 (also LZO1Y or LZO1Y_999)\nLZO1Z_999\nLZO2A_999\n\nKeyword arguments kwargs, if given, are passed to the algorithm struct constructors. See the documentation for the specific algorithm type for more information about valid keyword arguments and defaults.\n\n\n\n\n\n","category":"method"},{"location":"#LZOTools.unsafe_optimize!-Tuple{AbstractLZOAlgorithm, AbstractVector{UInt8}, AbstractVector{UInt8}}","page":"Home","title":"LZOTools.unsafe_optimize!","text":"unsafe_optimize!([algorithm], dest, src; [kwargs...])::Int\n\nOptimize the already compressed src in-place by decompressing to dest using LZO algorithm algorithm.\n\nThe method is \"unsafe\" in that it does not check to see if the decompressed output can fit into dest before proceeding, and may write out of bounds or crash your program if the number of bytes required to decompress src is larger than the number of bytes available in dest. The method returns the number of bytes written to dest, which may be greater than length(dest).\n\nBoth dest and src have to have pointer and length methods defined, and the memory of both have to be writable or else undefined behavior will occur.\n\nThe algorithm argument, if given, can be an instance of an AbstractLZOAlgorithm, a Type{<:AbstractLZOAlgorithm}, or a Symbol or String that names an LZO algorithm. The supported compression algorithm types are listed below–the symbol and string versions are the same, case-sensitive characters as the type name:\n\nLZO1X_1, :LZO1X_1, or \"LZO1X_1\" (also LZO1X or LZO, and is the default if no algorithm is given)\nLZO1X_1_11\nLZO1X_1_12\nLZO1X_1_15\nLZO1X_999\nLZO1Y_1 (also LZO1Y)\nLZO1Y_999\n\n!!! warn Match the compression algorithm with the optimization algorithm     Undefined behavior occurs if the algorithm passed to optimize does not match the algorithm passed to compress when src was generated.\n\nKeyword arguments kwargs, if given, are passed to the algorithm struct constructors. See the documentation for the specific algorithm type for more information about valid keyword arguments and defaults.\n\n\n\n\n\n","category":"method"}]
}
